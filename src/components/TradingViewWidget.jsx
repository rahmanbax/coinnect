import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ cryptoDetails }) {
  const container = useRef();

  useEffect(() => {
    if (!cryptoDetails || !cryptoDetails.symbol) {
      return;
    }

    // Hapus widget lama sebelum menambahkan widget baru
    if (container.current) {
      container.current.innerHTML = ""; // Bersihkan kontainer
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "autosize": true,
      "symbol": "${cryptoDetails.symbol === "USDT" ? "USDT" : cryptoDetails.symbol + "USDT"}",
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
  }, [cryptoDetails]); // Render ulang widget setiap kali cryptoDetails berubah

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
