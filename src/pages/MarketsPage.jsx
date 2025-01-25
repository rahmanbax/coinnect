import React from "react";
import NavBar from "../containers/NavBar";
import MarketStats from "../containers/MarketStats";
import CryptoTableHeader from "../components/CryptoTableHeader";
import CryptoTableBody from "../components/CryptoTableBody";

const response = {
  result: [
    {
      id: "bitcoin",
      icon: "https://static.coinstats.app/coins/1650455588819.png",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      price: 104954.82092866427,
      priceBtc: 1,
      volume: 50425825908.78011,
      marketCap: 2079669596083.8523,
      availableSupply: 19814903,
      totalSupply: 19814903,
      fullyDilutedValuation: 2079669596083.8523,
      priceChange1h: 0.32,
      priceChange1d: -0.85,
      priceChange1w: 0.34,
      redditUrl: "https://www.reddit.com/r/Bitcoin/",
      twitterUrl: "https://twitter.com/bitcoin",
      explorers: [
        "https://mempool.space/",
        "https://platform.arkhamintelligence.com/explorer/token/bitcoin",
        "https://blockchair.com/bitcoin/",
        "https://btc.com/",
        "https://btc.tokenview.io/",
        "https://www.oklink.com/btc",
        "https://3xpl.com/bitcoin",
      ],
    },
    {
      id: "ethereum",
      icon: "https://static.coinstats.app/coins/1650455629727.png",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      price: 3336.8354086733398,
      priceBtc: 0.03179329990978963,
      volume: 16697347306.66854,
      marketCap: 402110099238.96735,
      availableSupply: 120506423,
      totalSupply: 120506423,
      fullyDilutedValuation: 402110099238.96735,
      priceChange1h: 0.59,
      priceChange1d: -1.4,
      priceChange1w: 0.85,
      redditUrl: "https://www.reddit.com/r/ethereum",
      websiteUrl: "https://www.ethereum.org/",
      twitterUrl: "https://twitter.com/ethereum",
      contractAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      decimals: 18,
      explorers: [
        "https://etherscan.io/",
        "https://platform.arkhamintelligence.com/explorer/token/ethereum",
        "https://ethplorer.io/",
        "https://blockchair.com/ethereum",
        "https://eth.tokenview.io/",
        "https://www.oklink.com/eth",
        "https://3xpl.com/ethereum",
      ],
    },
    {
      id: "ripple",
      icon: "https://static.coinstats.app/coins/XRPdnqGJ.png",
      name: "XRP",
      symbol: "XRP",
      rank: 3,
      price: 3.134657163701899,
      priceBtc: 0.00002986694970357207,
      volume: 2656384808.4727206,
      marketCap: 180685435719.1125,
      availableSupply: 57641211234,
      totalSupply: 99986586496,
      fullyDilutedValuation: 313423669633.78595,
      priceChange1h: 0.83,
      priceChange1d: -0.8,
      priceChange1w: -1.33,
      redditUrl: "https://www.reddit.com/r/ripple",
      websiteUrl: "https://ripple.com/currency/",
      twitterUrl: "https://twitter.com/Ripple",
      contractAddress: "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
      decimals: 18,
      explorers: [
        "https://blockchair.com/ripple",
        "https://xrpcharts.ripple.com",
        "https://xrpscan.com/",
        "https://bithomp.com/explorer/",
      ],
    },
    {
      id: "tether",
      icon: "https://static.coinstats.app/coins/1650455771843.png",
      name: "Tether",
      symbol: "USDT",
      rank: 4,
      price: 1.0001992,
      priceBtc: 0.000009529877635701116,
      volume: 69558999125.56317,
      marketCap: 139358561793.7737,
      availableSupply: 139330807097,
      totalSupply: 139330807097,
      fullyDilutedValuation: 139358561793.7737,
      priceChange1h: -0.13,
      priceChange1d: -0.18,
      priceChange1w: 0.08,
      redditUrl: "https://www.reddit.com",
      websiteUrl: "https://tether.to/",
      twitterUrl: "https://twitter.com/Tether_to",
      contractAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      decimals: 18,
      explorers: [
        "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7",
        "https://platform.arkhamintelligence.com/explorer/token/tether",
        "https://ethplorer.io/address/0xdac17f958d2ee523a2206206994597c13d831ec7",
        "https://explorer.kava.io/token/0x919c1c267bc06a7039e03fcc2ef738525769109c",
        "https://avascan.info/blockchain/c/address/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7/token",
        "https://solscan.io/token/es9vmfrzacermjfrf4h2fyd4kconky11mcce8benwnyb",
        "https://nearblocks.io/token/usdt.tether-token.near",
        "https://tonscan.org/address/EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
        "https://celoscan.io/token/0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e",
        "https://explorer.celo.org/mainnet/token/0x48065fbbe25f71c9282ddf5e1cd6d6a887483d5e",
      ],
    },
    {
      id: "solana",
      icon: "https://static.coinstats.app/coins/1701234596791.png",
      name: "Solana",
      symbol: "SOL",
      rank: 5,
      price: 254.7373367150348,
      priceBtc: 0.0024271321634117236,
      volume: 9269095945.915264,
      marketCap: 123967879823.86308,
      availableSupply: 486649823,
      totalSupply: 592781387,
      fullyDilutedValuation: 151003551778.62436,
      priceChange1h: 1.04,
      priceChange1d: -3.29,
      priceChange1w: -1.96,
      redditUrl: "https://www.reddit.com/r/solana",
      websiteUrl: "https://solana.com/",
      twitterUrl: "https://twitter.com/solana",
      contractAddress: "0x7dff46370e9ea5f0bad3c4e29711ad50062ea7a4",
      decimals: 18,
      explorers: [
        "https://solscan.io/",
        "https://platform.arkhamintelligence.com/explorer/token/solana",
        "https://xray.helius.xyz/",
        "https://solana.fm/",
        "https://solanabeach.io/",
        "https://www.oklink.com/sol",
        "https://explorer.solana.com/",
      ],
    },
    {
      id: "binance-coin",
      icon: "https://static.coinstats.app/coins/1666608145347.png",
      name: "BNB",
      symbol: "BNB",
      rank: 6,
      price: 687.6549260026576,
      priceBtc: 0.0065519621495322465,
      volume: 1532597513.5501966,
      marketCap: 100320310278.98709,
      availableSupply: 145887576,
      totalSupply: 145887576,
      fullyDilutedValuation: 100320310278.98709,
      priceChange1h: 0.09,
      priceChange1d: 0.37,
      priceChange1w: -2.28,
      redditUrl: "https://www.reddit.com/r/binance",
      websiteUrl: "https://www.binance.com",
      twitterUrl: "https://twitter.com/binance",
      contractAddress: "BNB",
      decimals: 18,
      explorers: [
        "https://bscscan.com",
        "https://platform.arkhamintelligence.com/explorer/token/binancecoin",
        "https://explorer.binance.org/",
        "https://binance.mintscan.io/",
        "https://etherscan.io/token/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
        "https://ethplorer.io/address/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
        "https://www.oklink.com/bsc",
        "https://3xpl.com/bnb",
      ],
    },
    {
      id: "dogecoin",
      icon: "https://static.coinstats.app/coins/DogecoinIZai5.png",
      name: "Dogecoin",
      symbol: "DOGE",
      rank: 7,
      price: 0.35701088828291705,
      priceBtc: 0.000003401592482726602,
      volume: 1964211135.6493127,
      marketCap: 52737243703.89738,
      availableSupply: 147718866384,
      totalSupply: 147771326384,
      fullyDilutedValuation: 52755972495.096695,
      priceChange1h: 2.07,
      priceChange1d: -0.55,
      priceChange1w: -10.29,
      redditUrl: "https://www.reddit.com/r/dogecoin/",
      twitterUrl: "https://twitter.com/dogecoin",
      contractAddress: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
      decimals: 18,
      explorers: [
        "https://blockchair.com/dogecoin",
        "https://doge.tokenview.io/",
        "https://3xpl.com/dogecoin",
        "https://www.oklink.com/doge",
      ],
    },
    {
      id: "usd-coin",
      icon: "https://static.coinstats.app/coins/1650455825065.png",
      name: "USDC",
      symbol: "USDC",
      rank: 8,
      price: 0.999988,
      priceBtc: 0.000009527916708255651,
      volume: 9036879238,
      marketCap: 52186022971,
      availableSupply: 52186848149,
      totalSupply: 52187384394,
      fullyDilutedValuation: 52184947980,
      priceChange1h: 0,
      priceChange1d: 0,
      priceChange1w: 0.01,
      redditUrl: "https://www.reddit.com",
      websiteUrl: "https://www.circle.com/en/usdc",
      twitterUrl: "https://twitter.com/circle",
      contractAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      decimals: 18,
      explorers: [
        "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "https://platform.arkhamintelligence.com/explorer/token/usd-coin",
        "https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "https://nearblocks.io/token/17208628f84f5d6ad33f0da3bbbeb27ffcb398eac501a31bd6ad2011e36133a1",
        "https://ethplorer.io/address/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        "https://basescan.org/token/0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
        "https://arbiscan.io/token/0xaf88d065e77c8cc2239327c5edb3a432268e5831",
        "https://binplorer.com/address/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "https://explorer.kava.io/token/0xfa9343c3897324496a05fc75abed6bac29f8a40f",
        "https://ftmscan.com/token/0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      ],
    },
    {
      id: "cardano",
      icon: "https://static.coinstats.app/coins/CardanojXddT.png",
      name: "Cardano",
      symbol: "ADA",
      rank: 9,
      price: 0.9894684069464513,
      priceBtc: 0.000009427634857728138,
      volume: 543049295.1504486,
      marketCap: 35508531272.215775,
      availableSupply: 35886473002,
      totalSupply: 45000000000,
      fullyDilutedValuation: 44526078312.59031,
      priceChange1h: 0.99,
      priceChange1d: -0.46,
      priceChange1w: -7.67,
      redditUrl: "https://www.reddit.com/r/cardano",
      websiteUrl: "https://cardano.org/",
      twitterUrl: "https://twitter.com/Cardano_CF",
      contractAddress: "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
      decimals: 18,
      explorers: [
        "https://cardanoscan.io/",
        "https://cardanoexplorer.com/",
        "https://blockchair.com/cardano",
        "https://adaex.org/",
        "https://adastat.net/",
        "https://ada.tokenview.io/",
        "https://3xpl.com/cardano",
      ],
    },
    {
      id: "staked-ether",
      icon: "https://static.coinstats.app/coins/staked-etheruqt.png",
      name: "Lido Staked Ether",
      symbol: "STETH",
      rank: 10,
      price: 3331.94,
      priceBtc: 0.03174682775883844,
      volume: 61712957,
      marketCap: 31799506738,
      availableSupply: 9552136,
      totalSupply: 9552136,
      fullyDilutedValuation: 31799506738,
      priceChange1h: 0.73,
      priceChange1d: -1.53,
      priceChange1w: 0.51,
      redditUrl: "https://www.reddit.com/r/lidofinance/",
      websiteUrl: "https://www.lido.fi",
      twitterUrl: "https://twitter.com/lidofinance",
      contractAddress: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
      decimals: 18,
      explorers: [
        "https://etherscan.io/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
        "https://platform.arkhamintelligence.com/explorer/token/staked-ether",
        "https://ethplorer.io/address/0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
        "https://ethereum.dex.guru/token/0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
      ],
    },
  ],
  meta: {
    page: 1,
    limit: 20,
    itemCount: 23921,
    pageCount: 1197,
    hasPreviousPage: false,
    hasNextPage: true,
  },
};

function formatNumberSeparatedWithComma(value) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumberToString(value) {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(0)}T`; // Format miliaran
  } else if (value >= 1e9) {
    return `${(value / 1e9).toFixed(0)}B`; // Format miliaran
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(0)}M`; // Format jutaan
  } else {
    return value.toLocaleString(); // Format biasa dengan koma
  }
}

const MarketsPage = () => {
  return (
    <div>
      <div className="">
        <NavBar />
        <main className="w-[1328px] flex flex-col items-center m-auto mt-16">
          <MarketStats />
          <section className="mt-16 w-full">
            <CryptoTableHeader />

            {response.result.map((coin) => (
              <CryptoTableBody
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
          </section>
        </main>
      </div>
    </div>
  );
};

export default MarketsPage;
