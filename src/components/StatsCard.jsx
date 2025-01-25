import { CaretDown } from "@phosphor-icons/react";
import React from "react";

const StatsCard = (props) => {
  const { title, value, change } = props;
  return (
    <div className="p-6 bg-white rounded-3xl">
      <p className="text-black/60">{title}</p>
      <div className="mt-2 flex items-center gap-3">
        <h2 className="text-xl font-bold">{value}</h2>
        <div className="p-1 bg-red-100 flex rounded-sm items-center">
            <CaretDown size={20} weight="fill" className="text-red-500"/>
            <p className="text-base text-red-500 font-bold">{change}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
