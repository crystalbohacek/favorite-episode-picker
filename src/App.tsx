import React from "react";
import { Store } from './Store'

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
  console.log(state)
  return (
    <React.Fragment>
      <h1>The Office</h1>
      <p>Pick your favorite episode!</p>
    </React.Fragment>
  );
}
