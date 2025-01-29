import React, { useEffect, useState } from "react";
import CryptoTableHeader from "../components/CryptoTableHeader";
import CryptoTableBody from "../components/CryptoTableBody";
import Pagination from "../components/Pagination";
import { getCoins } from "../services/product.service";

function formatNumberSeparatedWithComma(value) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumberToString(value) {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(0)}T`; // Format triliun
  } else if (value >= 1e9) {
    return `${(value / 1e9).toFixed(0)}B`; // Format miliar
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(0)}M`; // Format juta
  } else {
    return value.toLocaleString(); // Format biasa dengan koma
  }
}

const CryptoTable = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
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
          page,
          limit
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return (
    <section className="mt-16 w-full ">
      <div className="rounded-xl overflow-hidden">
        <CryptoTableHeader />
        {coins.map((coin) => (
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
        ))}
      </div>

      <Pagination page={page} lastPage={totalPages} setPage={setPage} />
    </section>
  );
};

export default CryptoTable;
