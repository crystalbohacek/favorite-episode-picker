import React from "react";
import { Store } from './Store'

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
  return (
    <React.Fragment>
      <h1>The Office</h1>
      <p>Pick your favorite episode!</p>
      <section>
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id}>
              <img
                alt={`The Office ${episode.name}`}
                src={episode.image && episode.image.medium}
              />
              <h3>{episode.name}</h3>
              <section>
                Season: {episode.season} Number: {episode.number}
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
