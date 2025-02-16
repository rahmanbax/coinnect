import React from "react";

const CryptoTableHeader = () => {
  return (
    <div className="bg-white text-black/60 flex w-full items-center text-xs md:text-sm">
      <div className="text-center w-[49px] md:w-[59px] p-4 md:p-5">#</div>
      <div className="text-center w-11 md:w-20 p-4 md:p-5"></div>
      <div className="p-4 md:p-5 flex-1">Name</div>
      <div className="p-4 md:p-5 w-[116px] hidden xl:block text-end">1h</div>
      <div className="p-4 md:p-5 w-[116px] text-end">24h</div>
      <div className="p-4 md:p-5 w-[116px] hidden lg:block text-end">7d</div>
      <div className="p-4 md:p-5 w-[160px] hidden md:block text-end">Price</div>
      <div className="p-4 md:p-5 w-[132px] hidden xl:block text-end">Market Cap</div>
      <div className="p-4 md:p-5 w-[148px] hidden lg:block text-end">Volume 24h</div>
    </div>
  );
};

export default CryptoTableHeader;
