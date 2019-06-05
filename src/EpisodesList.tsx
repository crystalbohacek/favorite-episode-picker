import React from "react";
import { IAction, IEpisode } from "./interfaces";

export default function EpisodesList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites } = props;
  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          alt={`The Office ${episode.name}`}
          src={episode.image && episode.image.medium}
        />
        <h3>{episode.name}</h3>
        <section className="episode-details">
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(episode)}>
            {favorites.find((fav: IEpisode) => fav.id === episode.id)
              ? "Unfav"
              : "Fav"}
          </button>
        </section>
      </section>
    );
  });
}
