import axios from "axios";

export const getCoins = (callback, page = 1, limit = 10) => {
  const adjustedPage = Math.min(page, 50);
  axios
    .get("https://openapiv1.coinstats.app/coins", {
      headers: {
        "X-API-KEY": "0TP5VglKG9meuQngisyWgPb3wLrQJIcVMHQgKOjV+Ps=",
        accept: "application/json",
      },
      params: {
        page: adjustedPage,
        limit: limit,
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
