import React, { useEffect, useState } from "react";
import TradingViewWidget from "../containers/TradingViewWidget";
import { useParams } from "react-router-dom";
import { getCoinsDetail } from "../services/product.service";
import NavBar from "../containers/NavBar";
import CryptoDetailHeader from "../components/CryptoDetail/CryptoDetailHeader";
import CryptoDetailBreadcrumb from "../components/CryptoDetail/CryptoDetailBreadcrumb";
import PriceChange from "../components/PriceChange";
import { formatNumberSeparatedWithComma } from "../utils/formatNumber";
import CryptoDetailPrice from "../components/CryptoDetail/CryptoDetailPrice";

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
      <main className="my-5 mx-5">
        <CryptoDetailBreadcrumb data={cryptoDetails} />
        <CryptoDetailHeader data={cryptoDetails} />
        <CryptoDetailPrice data={cryptoDetails}/>
        <div className="mt-5 h-[400px] md:h-[500px]">
          {cryptoDetails ? (
            <TradingViewWidget key={id} id={id} cryptoDetails={cryptoDetails} />
          ) : (
            <div>Loading charts...</div>
          )}
        </div>

      </main>
    </>
  );
};

export default CryptoDetail;
