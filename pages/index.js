import Head from "next/head";
import PopularGames from "../components/PopularGames";
import SearchGames from "../components/SearchGames";

export default function Home() {
  return (
    <div className="bg-dark-bg  ">
      <Head>
        <title>Game Pedia</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Prompt:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SearchGames />
      <PopularGames />
    </div>
  );
}
