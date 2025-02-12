import { CaretDown, CaretUp } from "@phosphor-icons/react";
import React from "react";

const PriceChange = (props) => {
  const { priceChange, textSizeBase = true } = props;

  // Ambil nilai absolut dari priceChange
  const absolutePriceChange = Math.abs(priceChange);

  return (
    <>
      {priceChange < 0 ? (
        <div className="flex items-center place-content-end">
          <CaretDown size={textSizeBase ? 16 : 14} weight="fill" className="text-red-600" />
          <p
            className={`text-sm md:text-base ${
              textSizeBase ? "text-base" : "text-xs md:text-sm"
            } text-red-600 font-medium`}
          >
            {absolutePriceChange}%
          </p>
        </div>
      ) : priceChange === 0 ? (
        <div className="text-end">
          <p
            className={`text-sm md:text-base ${
              textSizeBase ? "text-base" : "text-xs md:text-sm"
            } text-gray-600 font-medium`}
          >
            {absolutePriceChange}%
          </p>
        </div>
      ) : (
        <div className="flex items-center place-content-end">
          <CaretUp size={textSizeBase ? 16 : 14} weight="fill" className="text-green-600" />
          <p
            className={`text-sm md:text-base ${
              textSizeBase ? "text-base" : "text-xs md:text-sm"
            } text-green-600 font-medium`}
          >
            {absolutePriceChange}%
          </p>
        </div>
      )}
    </>
  );
};

export default PriceChange;
