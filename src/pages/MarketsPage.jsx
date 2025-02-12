import React from "react";
import NavBar from "../containers/NavBar";
import MarketStats from "../containers/MarketStats";
import Footer from "../containers/Footer";
import CryptoTable from "../containers/CryptoTable";

const MarketsPage = () => {
  return (
    <>
      <NavBar />
      <MarketStats />
      <CryptoTable />
      <Footer />
    </>
  );
};

export default MarketsPage;
