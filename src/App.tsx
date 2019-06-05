import React from "react";
import { Store } from "./Store";
import { IAction, IEpisode } from "./interfaces";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function App(): JSX.Element {
  const URL =
    "https://api.tvmaze.com/singlesearch/shows?q=the-office&embed=episodes";
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });
  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode
      };
    }
    return dispatch(dispatchObj);
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites
  };

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>The Office</h1>
          <p>Pick your favorite episode!</p>
        </div>
        <div className="favorites-display">
          Favorites: {state.favorites.length}
        </div>
      </header>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
