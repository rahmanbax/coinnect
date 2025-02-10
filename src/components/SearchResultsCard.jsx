import React from "react";
import { formatNumberSeparatedWithComma } from "../utils/formatNumber";
import PriceChange from "./PriceChange";

const SearchResultsCard = ({ data }) => {
  return (
    <div className="flex justify-between items-center p-3 mt-3 hover:bg-[#f5f5f5] transition ease-out rounded-xl">
      <div className="flex gap-3 items-center">
        <img src={data.icon} alt={data.name} className="rounded-full w-8 h-8" />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-base">{data.name}</p>
          <p className="text-black/60 text-sm">{data.symbol}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <p className="font-semibold text-base">
          ${formatNumberSeparatedWithComma(data.price)}
        </p>
        <PriceChange priceChange={data.priceChange1h} textSizeBase={false} />
      </div>
    </div>
  );
};

export default SearchResultsCard;
