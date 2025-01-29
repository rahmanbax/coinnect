import React from "react";
import NavBar from "../containers/NavBar";
import MarketStats from "../containers/MarketStats";
import Footer from "../containers/Footer";
import CryptoTable from "../containers/CryptoTable";


const MarketsPage = () => {

  return (
    < >
      <NavBar />
      <main className="w-[1328px] flex flex-col items-center m-auto my-16">
        <MarketStats />
        <CryptoTable/>
      </main>
      <Footer />
    </>
  );
};

export default MarketsPage;
