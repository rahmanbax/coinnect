import React, { useEffect, useRef, useState } from "react";
import CoinnectLogo from "../assets/coinnect-combination-logo.png";
import SearchBar from "../components/SearchBar";
import ButtonSecondary from "../components/ButtonSecondary";
import ButtonPrimary from "../components/ButtonPrimary";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import SearchModalLayout from "../components/SearchModal";

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
            <Link className="text-sm font-medium" to="/swap">
              Swap
            </Link>
            <Link className="text-sm font-medium" to="/tracker">
              Portfolio Tracker
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <SearchBar onClick={() => setOpen(true)} />
            <span className="text-sm opacity-20">|</span>
            <ButtonSecondary>Login</ButtonSecondary>
            <ButtonPrimary>Sign Up</ButtonPrimary>
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      <Modal searchModal={true} open={open} onClose={() => setOpen(false)}>
        <SearchModalLayout searchInputRef={searchInputRef}/>
      </Modal>
    </>
  );
};

export default NavBar;
