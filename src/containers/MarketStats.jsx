import React, { useEffect, useState } from "react";
import StatsCard from "../components/MarketStatsCard";
import { getMarketData } from "../services/product.service";
import {
  formatNumberSeparatedWithComma,
  formatNumberToString,
} from "../utils/formatNumber";

const MarketStats = () => {
  const [marketData, setMarketData] = useState([]); // Gunakan object sebagai initial state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataMarket = async () => {
      setLoading(true);
      try {
        await getMarketData((data) => {
          setMarketData(data); // Langsung simpan data response ke state
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataMarket();
  }, []);

  return (
    <>
      <section className="mx-5 mt-5 md:mt-10 md:mx-10 lg:mx-auto lg:mt-16 lg:w-[984px]">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-xl md:text-3xl text-center">
            Today's Crypto Market Cap
          </h1>
          <p className="text-center text-sm md:text-base text-black/60">
            The global cryptocurrency market cap today is currently valued at
            approximately ${formatNumberToString(marketData.marketCap)},
            reflecting a {marketData.marketCapChange}% change in the past 24
            hours. The total trading volume for all cryptocurrencies over the
            last day is around ${formatNumberToString(marketData.volume)}, with
            Bitcoin holding a market dominance of {marketData.btcDominance}%.
          </p>
        </div>
        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <StatsCard
            title="Market Cap"
            value={`$${formatNumberSeparatedWithComma(marketData.marketCap)}`}
            change={marketData.marketCapChange}
          />
          <StatsCard
            title="24h Volume"
            value={`$${formatNumberSeparatedWithComma(marketData.volume)}`}
            change={marketData.volumeChange}
          />
          <StatsCard
            title="BTC Dominance"
            value={`${marketData.btcDominance}%`}
            change={marketData.btcDominanceChange}
          />
        </div>
      </section>
    </>
  );
};

export default MarketStats;
