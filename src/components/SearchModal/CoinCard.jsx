import React from "react";
import { formatNumberSeparatedWithComma } from "../../utils/formatNumber";
import PriceChange from "../PriceChange";
import { Link } from "react-router-dom";

const CoinCard = ({ data }) => {
  return (
    <Link to={`/markets/${data.id}`}>
      <div className="flex justify-between items-center p-3 mt-3 hover:bg-[#f5f5f5] w-full transition ease-out rounded-xl">
        <div className="flex gap-3 items-center">
          <img
            src={data.icon}
            alt={data.name}
            className="rounded-full w-6 h-6 md:w-8 md:h-8"
          />
          <div className="flex flex-1 flex-col gap-1">
            <p className="font-medium text-sm md:text-base">{data.name}</p>
            <p className="text-black/60 text-xs md:text-sm">{data.symbol}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="font-semibold text-sm md:text-base">
            ${formatNumberSeparatedWithComma(data.price)}
          </p>
          <PriceChange priceChange={data.priceChange1d} textSizeBase={false} />
        </div>
      </div>
    </Link>
  );
};

export default CoinCard;
