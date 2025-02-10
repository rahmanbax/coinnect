import React, { useEffect, useState } from "react";
import CryptoTableHeader from "../components/CryptoTableHeader";
import CryptoTableBody from "../components/CryptoTableBody";
import Pagination from "../components/Pagination";
import { getCoins } from "../services/product.service";
import { useSearchParams } from "react-router-dom";
import { formatNumberSeparatedWithComma, formatNumberToString } from "../utils/formatNumber";

const CryptoTable = () => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1; 
  const limit = 10; 

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await getCoins(
          (data) => {
            setCoins(data.result);
            setTotalPages(Math.min(data.meta.pageCount, 50));
          },
          page, // Pastikan menggunakan page dari URL
          limit
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]); // Re-fetch data ketika page atau limit berubah

  return (
    <section className="mt-16 w-full">
      <div className="rounded-xl overflow-hidden">
        <CryptoTableHeader />
        {loading ? (
          <p className="text-center py-5">Loading...</p>
        ) : (
          coins.map((coin) => (
            <CryptoTableBody
              key={coin.symbol}
              index={coin.rank}
              name={coin.name}
              icon={coin.icon}
              symbol={coin.symbol}
              priceChange1h={coin.priceChange1h}
              priceChange1d={coin.priceChange1d}
              priceChange1w={coin.priceChange1w}
              price={formatNumberSeparatedWithComma(coin.price)}
              marketCap={formatNumberToString(coin.marketCap)}
              volume={formatNumberToString(coin.volume)}
            />
          ))
        )}
      </div>

      <Pagination lastPage={totalPages} />
    </section>
  );
};

export default CryptoTable;
