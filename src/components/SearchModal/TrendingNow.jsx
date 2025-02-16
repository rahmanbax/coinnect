import React from "react";
import CoinCard from "./CoinCard";

const TrendingNowLayout = ({trendData, onClose}) => {
  return (
    <>
      {/* When not searching */}
      <p className="font-bold text-sm text-black/50">Trending now</p>
      {trendData.map((data) => <CoinCard key={data.id} onClose={onClose} data={data} />)}
    </>
  );
};

export default TrendingNowLayout;
