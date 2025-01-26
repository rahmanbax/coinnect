import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React from "react";

const PriceChange = (props) => {
    const {priceChange} = props;
  return (
    <>
      {priceChange < 0 ? (
        <div className="p-5 w-[116px] flex items-center place-content-end">
          <CaretDown size={16} weight="fill" className="text-red-500" />
          <p className="text-base text-red-500 font-medium">{priceChange}%</p>
        </div>
      ) : priceChange === 0 ? (
        <div className="p-5 w-[116px] text-end">
          <p className="text-base text-gray-500 font-medium">
            {priceChange}%
          </p>
        </div>
      ) : (
        <div className="p-5 w-[116px] flex items-center place-content-end">
          <CaretUp size={16} weight="fill" className="text-green-500" />
          <p className="text-base text-green-500 font-medium">
            {priceChange}%
          </p>
        </div>
      )}
    </>
  );
};

export default PriceChange;
