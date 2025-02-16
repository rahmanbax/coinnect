import React from "react";
import coinnect from "../../public/coinnect-pictorial-logo.png";
import { GithubLogo, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const NavBarMobile = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className={`absolute top-0 size-full ${
        open ? "visible bg-white backdrop-blur-xs" : "invisible"
      }
      
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="my-5 flex flex-col gap-5"
      >
        <div className="flex mx-5 justify-between">
          <img src={coinnect} alt="" className="h-5" />
          <button onClick={onClose} className="cursor-pointer">
            <X size={20} weight="bold" />
          </button>
        </div>
        <Link to={"/markets"} className="p-5 hover:bg-[#f5f5f5] w-full font-medium text-2xl">
          Markets
        </Link>
        <a
          href="https://github.com/rahmanbax/crypto-app"
          target="blank"
          className="absolute bottom-5 left-5 flex items-center gap-2"
        >
          <GithubLogo className="text-base" weight="fill" />
          <p className="text-sm font-medium">Source Code</p>
        </a>
      </div>
    </div>
  );
};

export default NavBarMobile;
