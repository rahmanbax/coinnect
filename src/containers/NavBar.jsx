import React, { useEffect, useRef, useState } from "react";
import CoinnectLogo from "../assets/coinnect-combination-logo.png";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import SearchModalLayout from "../components/SearchModal";
import { GithubLogo } from "@phosphor-icons/react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      searchInputRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <header className="bg-white p-4">
        <nav className="flex justify-between items-center mx-14">
          <div className="flex gap-10 items-center">
            <Link to="/">
              <img src={CoinnectLogo} alt="" className="w-[119px] h-[25px]" />
            </Link>
            <Link className="text-sm font-medium" to="/markets">
              Markets
            </Link>
            {/* <Link className="text-sm font-medium" to="/swap">
              Swap
            </Link>
            <Link className="text-sm font-medium" to="/tracker">
              Portfolio Tracker
            </Link> */}
          </div>
          <div className="flex items-center gap-8">
            <SearchBar onClick={() => setOpen(true)} />
            <span className="text-sm opacity-20">|</span>
            <a
              href="https://github.com/rahmanbax/crypto-app"
              target="blank"
              className="flex gap-1 text-center"
            >
              <GithubLogo className="text-base" weight="fill" />
              <p className="text-sm font-medium">GitHub</p>
            </a>

            {/* <ButtonSecondary>Login</ButtonSecondary>
            <ButtonPrimary>Sign Up</ButtonPrimary> */}
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      <Modal searchModal={true} open={open} onClose={() => setOpen(false)}>
        <SearchModalLayout searchInputRef={searchInputRef} />
      </Modal>
    </>
  );
};

export default NavBar;
