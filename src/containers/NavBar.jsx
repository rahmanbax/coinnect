import React from "react";
import { CaretDown } from "@phosphor-icons/react";
import CoinnectLogo from "../assets/coinnect-logo.png";
import SearchBar from "../components/SearchBar";
import ButtonSecondary from "../components/ButtonSecondary";
import ButtonPrimary from "../components/ButtonPrimary";

const NavBar = () => {
  return (
    <header className="bg-white p-4">
      <nav className="flex justify-between items-center mx-14">
        <div className="flex gap-10 items-center">
          <a href="">
            <img src={CoinnectLogo} alt="" />
          </a>
          <a className="text-sm font-medium" href="#">
            Markets
          </a>
          <a className="text-sm font-medium" href="#">
            Swap
          </a>
          <a className="text-sm font-medium" href="#">
            Portfolio Tracker
          </a>
          <div className="flex gap-1 items-center">
            <p className="text-sm font-medium">More</p>
            <CaretDown size={12} weight="bold" />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <SearchBar />
          <span className="text-sm opacity-20">|</span>
          <ButtonSecondary>Login</ButtonSecondary>
          <ButtonPrimary>Sign Up</ButtonPrimary>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
