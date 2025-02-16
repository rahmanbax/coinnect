import React from "react";
import { formatNumberSeparatedWithComma } from "../../utils/formatNumber";

const StatsCard = ({ title, data }) => {
  if (!data) {
    return;
  }

  return (
    <div className="p-4 bg-white rounded-lg">
      <p className="text-xs md:text-sm text-black/60">{title}</p>
      <p className="text-sm md:text-base mt-2 font-bold">
        {data}
      </p>
    </div>
  );
};

export default StatsCard;
