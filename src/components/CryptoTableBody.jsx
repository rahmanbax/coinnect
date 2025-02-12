import React from "react";
import PriceChange from "./PriceChange";
import { formatNumberSeparatedWithComma, formatNumberToString } from "../utils/formatNumber";

const CryptoTableBody = ({ coinData }) => {
  return (
    <div className="bg-white hover:bg-gray-50 flex text-base items-center border-t-1 border-[#f5f5f5] transition ease-out">
      <div className="text-center w-[49px] md:w-[59px] p-4 md:p-5 text-xs md:text-sm">{coinData.rank}</div>
      <div className="text-center w-11 md:w-20 flex justify-center">
        <img
          src={coinData.icon}
          alt={coinData.symbol}
          className="w-7 md:w-10 rounded-full"
        />
      </div>
      <div className="p-4 md:p-5 flex-1 flex flex-col gap-1">
        <p className="w-full text-sm md:text-base">{coinData.name}</p>
        <span className="text-black/60 hidden md:block text-sm">{coinData.symbol}</span>
        <span className="text-black/80 md:hidden text-xs md:text-sm">${formatNumberSeparatedWithComma(coinData.price)}</span>
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
