import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React from "react";
import PriceChange from "./PriceChange";

const CryptoTableBody = (props) => {
  const {
    index,
    name,
    icon,
    symbol,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    price,
    marketCap,
    volume,
  } = props;
  return (
    <div className="bg-white hover:bg-gray-50 flex text-base items-center border-t-1 border-[#f5f5f5] transition ease-out">
      <div className="text-center w-[59px] p-5">{index}</div>
      <div className="text-center w-20 p-5">
        <img src={icon} alt={symbol} className="w-10 h-10 rounded-full" />
      </div>
      <div className="p-5 flex-1 flex flex-col gap-1">
        <p>{name}</p>
        <span className="text-black/60 text-sm">{symbol}</span>
      </div>
      <PriceChange priceChange={priceChange1h} />
      <PriceChange priceChange={priceChange1d} />
      <PriceChange priceChange={priceChange1w} />
      <div className="p-5 w-[160px] text-end">${price}</div>
      <div className="p-5 w-[132px] text-end">${marketCap}</div>
      <div className="p-5 w-[148px] text-end">${volume}</div>
    </div>
  );
};

export default CryptoTableBody;
