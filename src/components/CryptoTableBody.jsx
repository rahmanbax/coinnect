import React from "react";
import PriceChange from "./PriceChange";
import { formatNumberSeparatedWithComma, formatNumberToString } from "../utils/formatNumber";

const CryptoTableBody = ({ coinData }) => {
  return (
    <div className="bg-white hover:bg-gray-50 flex text-base items-center border-t-1 border-[#f5f5f5] transition ease-out">
      <div className="text-center w-[59px] p-5">{coinData.rank}</div>
      <div className="text-center w-20 p-5">
        <img
          src={coinData.icon}
          alt={coinData.symbol}
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col gap-1">
        <p className="w-full">{coinData.name}</p>
        <span className="text-black/60 hidden md:block text-sm">{coinData.symbol}</span>
        <span className="text-black/80 md:hidden text-sm">${formatNumberSeparatedWithComma(coinData.price)}</span>
      </div>
      <div className="p-5 w-[116px] hidden xl:block ">
        <PriceChange priceChange={coinData.priceChange1h} />
      </div>
      <div className="p-5 w-[116px]">
        <PriceChange priceChange={coinData.priceChange1d} />
      </div>
      <div className="p-5 w-[116px] hidden lg:block ">
        <PriceChange priceChange={coinData.priceChange1w} />
      </div>
      <div className="p-5 w-[160px] hidden md:block text-end">${formatNumberSeparatedWithComma(coinData.price)}</div>
      <div className="p-5 w-[132px] hidden xl:block text-end">${formatNumberToString(coinData.marketCap)}</div>
      <div className="p-5 w-[148px] hidden lg:block text-end">${formatNumberToString(coinData.volume)}</div>
    </div>
  );
};

export default CryptoTableBody;
