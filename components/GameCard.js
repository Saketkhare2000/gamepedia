import axios from "axios";
import React from "react";
import { gameDetailsURL, gameScreenshotURL, upcomingGamesURL } from "../api";

const GameCard = ({ game }) => {
  const getGameDetails = (game_id) => {
    axios
      .get(upcomingGamesURL())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="bg-gray-bg md:max-w-[300px] p-3 rounded-lg shoadow mt-5 hover:scale-105 hover:cursor-pointer transition-all duration-100 ease-out"
      onClick={() => getGameDetails(game.id)}
    >
      <img
        className="w-[300px] max-h-[200px] object-cover rounded"
        src={game.background_image}
        alt="Card image cap"
      />
      <div className="">
        <p className="font-body text-white font-bold text-lg mt-3">
          {game.name}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
