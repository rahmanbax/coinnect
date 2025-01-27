import React from "react";
import coinnect from "../assets/coinnect-combination-logo.png";
import { FacebookLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F0F0F0] py-16">
      <div className="flex w-[1328px] justify-between mx-auto">
        <div className="w-[450px]">
          <Link to="/"><img src={coinnect} alt="" className="h-[30px]" /></Link>
          <div className="flex gap-2 mt-6">
            <TiktokLogo
              className="p-2 h-8 w-8 bg-white rounded-full text-black"
              size={20}
              weight="fill"
            />
            <YoutubeLogo
              className="p-2 h-8 w-8 bg-white rounded-full text-black"
              size={14}
              weight="fill"
            />
            <FacebookLogo
              className="p-2 h-8 w-8 bg-white rounded-full text-black"
              size={14}
              weight="fill"
            />
          </div>
          <p className="mt-6 text-sm text-black/60">
            Jalan Mawar Indah No. 45, Kelurahan Sukamakmur, Kecamatan Harapan
            Jaya, Kota Surabaya, Jawa Timur, 60234, Indonesia.
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Features</p>
            <Link to={"/markets"} className="">Markets</Link>
            <Link to={"/swap"} className="">Swap</Link>
            <Link to={"/tracker"} className="">Portfolio Tracker</Link>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Information</p>
            <Link className="">Airdrop</Link>
            <Link className="">News</Link>
            <Link className="">Blog</Link>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Policies</p>
            <Link className="">Terms of Use</Link>
            <Link className="">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Features</p>
            <Link className="">Help Center</Link>
            <Link className="">FAQ</Link>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Company</p>
            <Link className="">About</Link>
            <Link className="">Career</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
