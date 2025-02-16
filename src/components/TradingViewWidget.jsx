import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ cryptoDetails }) {
  const container = useRef();
  let symbol = cryptoDetails.symbol;

  useEffect(() => {
    // Pastikan cryptoDetails dan symbol ada sebelum memuat widget
    if (!cryptoDetails || !cryptoDetails.symbol) {
      return; // Jika data atau symbol tidak ada, hentikan eksekusi
    }



    // Cek apakah skrip sudah ada di dalam DOM
    if (document.getElementById("tradingview-widget-script")) {
      return; // Jika skrip sudah ada, keluar dari useEffect
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.id = "tradingview-widget-script"; // Set ID untuk skrip agar bisa dicek di penggunaan berikutnya
    script.innerHTML = `{
      "autosize": true,
      "symbol": "${symbol}USDT",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": false,
      "save_image": false,
      "calendar": false,
      "support_host": "https://www.tradingview.com"
    }`;

    container.current.appendChild(script);

    // Cleanup function untuk menghapus skrip saat komponen dibersihkan
    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [cryptoDetails]); 

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
