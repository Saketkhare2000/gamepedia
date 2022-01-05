import React from "react";
import axios from "axios";
import { searchGameURL } from "../api";
import GameCard from "./GameCard";
import Spinner from "./Spinner";
const SearchGames = () => {
  //spinner
  const [loading, setLoading] = React.useState(false);

  //search game
  const [searchGames, setSearchGames] = React.useState([]);
  const [searchInput, setSearchInput] = React.useState("");
  const handleSubmit = (e) => {
    const game_name = searchInput;
    setLoading(true);
    e.preventDefault();
    axios
      .get(searchGameURL(game_name))
      .then((res) => {
        setSearchGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="md:max-w-3xl lg:max-w-full lg:px-32 mx-auto py-16 max-w-xs">
      <div className="flex space-x-12">
        <input
          type="text"
          className="p-3 font-bold font-body rounded"
          placeholder="search"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-accent p-3 rounded font-bold text-white"
        >
          Search
        </button>
      </div>
      <div className="flex w-full justify-between flex-wrap">
        {loading ? (
          <Spinner />
        ) : (
          //map through searchGames array
          searchGames.map((game) => {
            return game.background_image === null ? (
              <></>
            ) : (
              <GameCard game={game} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SearchGames;
