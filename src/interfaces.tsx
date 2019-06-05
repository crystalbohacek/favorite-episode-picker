/**
|--------------------------------------------------
| All the interfaces
|--------------------------------------------------
*/

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  airdate: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  season: number;
  summary: string;
  url: string;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: {state: IState, dispatch: any},
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  favorites: Array<IEpisode>;
}

