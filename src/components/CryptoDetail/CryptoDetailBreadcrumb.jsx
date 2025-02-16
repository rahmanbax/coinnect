import { CaretRight } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

const CryptoDetailBreadcrumb = ({data}) => {
  if (!data) {
    return; // Handle loading state or return null
  }

  return (
    <>
      <div className="text-black/60 text-sm flex items-center"><Link to="/markets">Crypto Market</Link> <CaretRight/> {data.name} Price</div>
    </>
  );
};

export default CryptoDetailBreadcrumb;
