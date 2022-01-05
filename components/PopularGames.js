import React from "react";
import data from "../data.json";
import { popularGamesURL } from "../api";
import axios from "axios";
import GameCard from "./GameCard";

const PopularGames = () => {
  //axios call
  const [popularGames, setPopularGames] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(popularGamesURL())
      .then((res) => {
        setPopularGames(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="md:max-w-3xl lg:max-w-full lg:px-32 mx-auto py-16 max-w-xs">
      <h1 className="text-5xl font-bold text-white font-heading my-10">
        Popular Games
      </h1>
      <div className="flex w-full justify-between flex-wrap">
        {
          //map through popularGames array
          popularGames.map((game) => {
            return game.background_image === null ? (
              <></>
            ) : (
              <GameCard game={game} />
            );
          })
        }
      </div>
    </div>
  );
};

export default PopularGames;
