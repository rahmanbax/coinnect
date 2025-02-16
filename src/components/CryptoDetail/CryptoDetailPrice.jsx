import React from "react";
import { formatNumberSeparatedWithComma } from "../../utils/formatNumber";
import PriceChange from "../PriceChange";

const CryptoDetailPrice = ({data}) => {
  if (!data) {
    return <div>Loading...</div>; // Handle loading state or return null
  }

  return (
    <div className="p-4 bg-white rounded-lg mt-5 flex flex-col gap-4">
      <div className="flex justify-between text-sm md:text-base">
        <p className="text-black/60">Price</p>
        <p className="font-semibold">
          ${formatNumberSeparatedWithComma(data.price)}
        </p>
      </div>
      <div className="flex justify-between text-sm md:text-base">
        <p className="text-black/60">1h change</p>
        <PriceChange priceChange={data.priceChange1h} textSizeBase={true} />
      </div>
      <div className="flex justify-between text-sm md:text-base">
        <p className="text-black/60">24h change</p>
        <PriceChange priceChange={data.priceChange1d} textSizeBase={true} />
      </div>
      <div className="flex justify-between text-sm md:text-base">
        <p className="text-black/60">7d change</p>
        <PriceChange priceChange={data.priceChange1w} textSizeBase={true} />
      </div>
    </div>
  );
};

export default CryptoDetailPrice;
