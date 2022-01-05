const base_url = "https://api.rawg.io/api/";
const api = "4f5f678b4ca342e3a6a4592b35ee2b27";
//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//fetch games from last year to current year
const popular_games = `games?key=${api}&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//fetching new games
const upcoming_games = `games?key=${api}=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//fetching new games
const new_games = `games?key=${api}=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games?key=${api}/${game_id}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games?key=${api}/${game_id}/screenshots`;
//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?key=${api}&search=${game_name}&page_size=9`;
