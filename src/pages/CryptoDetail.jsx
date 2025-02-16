import React, { useEffect, useState } from "react";
import TradingViewWidget from "../components/TradingViewWidget";
import { useParams } from "react-router-dom";
import { getCoinsDetail } from "../services/product.service";
import NavBar from "../containers/NavBar";
import CryptoDetailHeader from "../components/CryptoDetail/CryptoDetailHeader";
import CryptoDetailBreadcrumb from "../components/CryptoDetail/Breadcrumb";
import CryptoDetailPrice from "../components/CryptoDetail/CryptoDetailPrice";
import StatsCard from "../components/CryptoDetail/StatsCard";
import {
  formatNumber,
} from "../utils/formatNumber";
import Footer from "../containers/Footer";

const CryptoDetail = () => {
  const { id } = useParams();
  const [cryptoDetails, setCryptoDetails] = useState(null); // Default to null until data is fetched

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      try {
        await getCoinsDetail((data) => {
          setCryptoDetails(data); // Update cryptoDetails once data is fetched
        }, id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCryptoDetails();
  }, [id]);

  return (
    <>
      <NavBar />
      <main className="my-5 mx-5 md:mx-10 lg:mx-auto lg:w-[984px] xl:w-[1280px]">
        <CryptoDetailBreadcrumb data={cryptoDetails} />
        <CryptoDetailHeader data={cryptoDetails} />
        <CryptoDetailPrice data={cryptoDetails} />
        <div className="mt-5 h-[400px] md:h-[500px]">
          {cryptoDetails && (
            <TradingViewWidget
              key={cryptoDetails.id}
              id={id}
              cryptoDetails={cryptoDetails}
            />
          )}
        </div>
        {cryptoDetails && (
          <div className="mt-5 grid grid-cols-2 gap-2 md:gap-4 xl:grid-cols-4">
            <StatsCard
              title={"Market Cap"}
              data={`$${formatNumber(
                cryptoDetails?.marketCap
              )}`}
            />
            <StatsCard
              title={"Volume"}
              data={`$${formatNumber(cryptoDetails?.volume)}`}
            />
            <StatsCard
              title={"Total Supply"}
              data={`${formatNumber(cryptoDetails?.totalSupply)}`}
            />
            <StatsCard
              title={"Available Supply"}
              data={`${formatNumber(cryptoDetails?.availableSupply)}`}
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CryptoDetail;
