import axios from "axios";

export const getCoins = (callback, page = 1) => {
  const adjustedPage = Math.min(page, 50);
  axios
    .get("https://openapiv1.coinstats.app/coins", {
      headers: {
        "X-API-KEY": "0TP5VglKG9meuQngisyWgPb3wLrQJIcVMHQgKOjV+Ps=",
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

export const getMarketData = (callback) => {
  axios
    .get("https://openapiv1.coinstats.app/markets", {
      headers: {
        "X-API-KEY": "0TP5VglKG9meuQngisyWgPb3wLrQJIcVMHQgKOjV+Ps=",
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
        "X-API-KEY": "0TP5VglKG9meuQngisyWgPb3wLrQJIcVMHQgKOjV+Ps=",
        accept: "application/json",
      },
      params: {
        limit: 100,
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
