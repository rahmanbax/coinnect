import React from "react";
import PriceChange from "./PriceChange";

const TrendingNowLayout = () => {
  return (
    <>
      {/* When not searching */}
      <p className="font-bold text-sm text-black/50">Trending now</p>
      <div className="flex justify-between items-center p-3 mt-3 hover:bg-[#f5f5f5] transition ease-out rounded-xl">
        <div className="flex gap-3 items-center">
          <img className="rounded-full w-8 h-8" />
          <div className="flex flex-col gap-1">
            <p className="font-medium text-base">Bitcoin</p>
            <p className="text-black/60 text-sm">BTC</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="font-semibold text-base">$131,131,11</p>
          <PriceChange priceChange={-0.5} textSizeBase={false} />
        </div>
      </div>
    </>
  );
};

export default TrendingNowLayout;
