import React from "react";
import { Store, IAction } from './Store'

interface IEpisode {
  airdate: string,
  id: number,
  image: { medium: string, original: string },
  name: string,
  number: number,
  season: number,
  summary: string,
  url: string
}

export default function App(): JSX.Element {
  const URL = 
    "https://api.tvmaze.com/singlesearch/shows?q=the-office&embed=episodes";
  const {state, dispatch} = React.useContext(Store)
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })
  const fetchDataAction = async () => {
    const data = await fetch(URL)
    const dataJSON = await data.json()
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }

  const toggleFavAction = (episode:IEpisode) => dispatch({
    type: 'ADD_FAV',
    payload: episode
  })

  return (
    <React.Fragment>
      <header className="header">
        <h1>The Office</h1>
        <p>Pick your favorite episode!</p>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                alt={`The Office ${episode.name}`}
                src={episode.image && episode.image.medium}
              />
              <h3>{episode.name}</h3>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button type="button" onClick={()=>toggleFavAction(episode)}> Fav </button>
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
