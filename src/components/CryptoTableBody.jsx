import React from "react";

const CryptoTableBody = ( props ) => {
    
  return (
    <div className="bg-white flex text-base items-center border-t-1 border-[#f5f5f5]">
      <div className="text-center w-[59px] p-5">1</div>
      <div className="text-center w-20 p-5"></div>
      <div className="p-5 flex-1 flex flex-col gap-1">
        <p>Bitcoin</p>
        <span className="text-black/60 text-sm">BTC</span>
      </div>
      <div className="p-5 w-[116px] text-end">3.1%</div>
      <div className="p-5 w-[116px] text-end">3.1%</div>
      <div className="p-5 w-[116px] text-end">3.1%</div>
      <div className="p-5 w-[160px] text-end">$105,117.59</div>
      <div className="p-5 w-[132px] text-end">$2T</div>
      <div className="p-5 w-[148px] text-end">$170B</div>
    </div>
  );
};

export default CryptoTableBody;
