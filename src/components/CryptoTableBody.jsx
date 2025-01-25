import React from "react";

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
    <div className="bg-white flex text-base items-center border-t-1 border-[#f5f5f5]">
      <div className="text-center w-[59px] p-5">{index}</div>
      <div className="text-center w-20 p-5">
        <img src={icon} alt={symbol} className="w-10 h-10" />
      </div>
      <div className="p-5 flex-1 flex flex-col gap-1">
        <p>{name}</p>
        <span className="text-black/60 text-sm">{symbol}</span>
      </div>
      <div className="p-5 w-[116px] text-end">{priceChange1h}</div>
      <div className="p-5 w-[116px] text-end">{priceChange1d}</div>
      <div className="p-5 w-[116px] text-end">{priceChange1w}</div>
      <div className="p-5 w-[160px] text-end">{price}</div>
      <div className="p-5 w-[132px] text-end">{marketCap}</div>
      <div className="p-5 w-[148px] text-end">{volume}</div>
    </div>
  );
};

export default CryptoTableBody;
