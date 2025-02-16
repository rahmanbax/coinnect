import React from "react";
import CoinCard from "./CoinCard";

const TrendingNowLayout = ({trendData}) => {
  return (
    <>
      {/* When not searching */}
      <p className="font-bold text-sm text-black/50">Trending now</p>
      {trendData.map((data) => <CoinCard key={data.id} data={data} />)}
    </>
  );
};

export default TrendingNowLayout;
