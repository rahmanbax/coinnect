import React from "react";

const CryptoDetailHeader = ({ data }) => {
    
  if (!data) {
    return; // Handle loading state or return null
  }

  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <img
          src={data.icon}
          alt={data.name}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />
        <div>
          <h2 className="text-sm md:text-base">{data.name}</h2>
          <p className="text-xs md:text-sm text-black/60">{data.symbol}</p>
        </div>
      </div>
      <div className="text-xs md:text-sm p-2 text-center min-w-11 h-fit bg-gray-200 rounded-lg text-black/80 font-semibold">
        #{data.rank}
      </div>
    </div>
  );
};

export default CryptoDetailHeader;
