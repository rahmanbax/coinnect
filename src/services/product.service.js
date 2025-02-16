import axios from "axios";

const API_KEY = import.meta.env.VITE_COINNECT_API_KEY;

export const getCoins = (callback, page = 1) => {
  const adjustedPage = Math.min(page, 50);
  axios
    .get("https://openapiv1.coinstats.app/coins", {
      headers: {
        "X-API-KEY": API_KEY  ,
        accept: "application/json",
      },
      params: {
        page: adjustedPage,
        limit: 10,
      },
    })
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCoinsDetail = (callback, id) => {
  axios
    .get(`https://openapiv1.coinstats.app/coins/${id}`, {
      headers: {
        "X-API-KEY": API_KEY  ,
        accept: "application/json",
      },
    })
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getMarketData = (callback) => {
  axios
    .get("https://openapiv1.coinstats.app/markets", {
      headers: {
        "X-API-KEY": API_KEY  ,
        accept: "application/json",
      },
    })
    .then((res) => {
      callback(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCoinsBySearch = (searchQuery, callback) => {
  axios
    .get(`https://openapiv1.coinstats.app/coins`, {
      headers: {
        "X-API-KEY": API_KEY  ,
        accept: "application/json",
      },
      params: {
        limit: 1000,
      },
    })
    .then((res) => {
      const filteredData = res.data.result.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
      callback(filteredData);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getCoinsTrend = (callback) => {
  axios
    .get("https://openapiv1.coinstats.app/coins", {
      headers: {
        "X-API-KEY": API_KEY  ,
        accept: "application/json",
      },
      params: {
        limit: 5,
        "priceChange1d~greaterThan": 10,
        "volume~greaterThan": 1000000,
        "marketCap~greaterThan": 10000000,
        "sortyBy": "volume"
      },
    })
    .then((res) => {
      callback(res.data.result);
    })
    .catch((error) => {
      console.log(error);
    });
};
