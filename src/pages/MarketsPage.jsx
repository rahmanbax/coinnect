import React from "react";
import NavBar from "../containers/NavBar";
import StatsCard from "../components/StatsCard";

const MarketsPage = () => {
  return (
    <div>
      <div className="">
        <NavBar />
        <main className="w-[1328px] flex flex-col items-center m-auto mt-16">
          <section className="w-[1052px]">
            <h1 className="text-center text-3xl font-bold">
              Today's Crypto Market Cap
            </h1>
            <p className="text-center mt-4 text-black/60">
              The global cryptocurrency market cap today is currently valued at
              approximately $3.7T, reflecting a 3.04% change in the past 24
              hours. The total trading volume for all cryptocurrencies over the
              last day is around $318B, with Bitcoin holding a market dominance
              of 55.3%.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-12">
                <StatsCard title="Market Cap" value="$3,712,067,671,731" change="3.04%" />
                <StatsCard title="Volume 24h" value="$3,712,067,671,731" change="3.04%" />
                <StatsCard title="BTC Dominance" value="$3,712,067,671,731" change="3.04%" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MarketsPage;
