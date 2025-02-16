import React, { useEffect, useState } from "react";
import CryptoTableHeader from "../components/CryptoTable/CryptoTableHeader";
import CryptoTableBody from "../components/CryptoTable/CryptoTableBody";
import Pagination from "../components/Pagination";
import { getCoins } from "../services/product.service";
import { useSearchParams } from "react-router-dom";

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
    <section className="mt-10 lg:mt-16 mx-5 md:mx-10 lg:mx-auto lg:w-[984px] xl:w-[1280px] ">
      <div className="rounded-xl overflow-hidden">
        <CryptoTableHeader />
        {loading ? (
          <p className="text-center py-5">Loading...</p>
        ) : (
          coins.map((coin) => <CryptoTableBody key={coin.symbol} coinData={coin} />)
        )}
      </div>

      <Pagination lastPage={totalPages} />
    </section>
  );
};

export default CryptoTable;
