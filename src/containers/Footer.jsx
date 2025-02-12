import React from "react";
import coinnect from "../assets/coinnect-combination-logo.png";
import { FacebookLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-10  py-10 bg-[#F0F0F0]">
      <div className="mx-5 md:mx-10 lg:flex justify-between lg:mx-auto lg:w-[984px] xl:w-[1280px]">
        <div className="flex flex-col gap-5 lg:w-[300px] xl:w-[450px]">
          <Link to={"/"}>
            <img src={coinnect} className="h-8 w-fit" />
          </Link>
          <p className="text-sm text-black/60">
            Jalan Mawar Indah No. 45, Kelurahan Sukamakmur, Kecamatan Harapan
            Jaya, Kota Surabaya, Jawa Timur, 60234, Indonesia.
          </p>
        </div>
        <div className="hidden md:flex mt-10 lg:mt-0 justify-between text-sm">
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Features</p>
            <Link to={"/markets"} className="">
              Markets
            </Link>
            <p className="cursor-not-allowed">Swap</p>
            <p className="cursor-not-allowed">Portfolio Tracker</p>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Information</p>
            <p className="cursor-not-allowed">Airdrop</p>
            <p className="cursor-not-allowed">News</p>
            <p className="cursor-not-allowed">Blog</p>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Policies</p>
            <p className="cursor-not-allowed">Terms of Use</p>
            <p className="cursor-not-allowed">Privacy Policy</p>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Features</p>
            <p className="cursor-not-allowed">Help Center</p>
            <p className="cursor-not-allowed">FAQ</p>
          </div>
          <div className="flex flex-col gap-4 w-33">
            <p className="font-semibold">Company</p>
            <p className="cursor-not-allowed">About</p>
            <p className="cursor-not-allowed">Career</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
