import React, { useEffect, useState } from "react";
import StatsCard from "../components/StatsCard";
import { getMarketData } from "../services/product.service";
import { formatNumberSeparatedWithComma, formatNumberToString } from "../utils/formatNumber";

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
    <section className="w-[1052px]">
      <h1 className="text-center text-3xl font-bold">
        Today's Crypto Market Cap
      </h1>

      {loading ? (
        <div className="text-center mt-4">Loading market data...</div>
      ) : (
        <>
          <p className="text-center mt-4 text-black/60">
            The global cryptocurrency market cap today is currently valued at
            approximately ${formatNumberToString(marketData.marketCap)},
            reflecting a {marketData.marketCapChange}% change in the past 24
            hours. The total trading volume for all cryptocurrencies over the
            last day is around ${formatNumberToString(marketData.volume)}, with
            Bitcoin holding a market dominance of {marketData.btcDominance}%.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-12">
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
        </>
      )}
    </section>
  );
};

export default MarketStats;
