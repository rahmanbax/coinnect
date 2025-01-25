import React from "react";
import NavBar from "../containers/NavBar";
import MarketStats from "../containers/MarketStats";
import CryptoTableHeader from "../components/CryptoTableHeader";
import CryptoTableBody from "../components/CryptoTableBody";

const MarketsPage = () => {
  return (
    <div>
      <div className="">
        <NavBar />
        <main className="w-[1328px] flex flex-col items-center m-auto mt-16">
          <MarketStats />
          <section className="mt-16 w-full">
            <CryptoTableHeader/>
            <CryptoTableBody />
          </section>
        </main>
      </div>
    </div>
  );
};

export default MarketsPage;
