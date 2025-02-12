import React, { useEffect, useRef, useState } from "react";
import CoinnectLogo from "../assets/coinnect-combination-logo.png";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import SearchModalLayout from "../components/SearchModal";
import { GithubLogo, List } from "@phosphor-icons/react";
import NavBarMobile from "../components/NavBarMobile";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      searchInputRef.current?.focus();
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    if (openNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNavBar]);

  return (
    <>
      <header className="bg-white py-4">
        <nav className="flex justify-between items-center mx-5 lg:mx-14">
          <div className="flex gap-10 items-center">
            <Link to="/">
              <img src={CoinnectLogo} alt="" className="h-6" />
            </Link>
            <Link className="text-sm font-medium hidden lg:block" to="/markets">
              Markets
            </Link>
          </div>
          <div className="flex items-center gap-5 lg:gap-8">
            <SearchBar onClick={() => setOpen(true)} />
            <span className="text-sm opacity-20 hidden lg:block">|</span>
            <a
              href="https://github.com/rahmanbax/crypto-app"
              target="blank"
              className="gap-1 text-center hidden lg:flex"
            >
              <GithubLogo className="text-base" weight="fill" />
              <p className="text-sm font-medium">GitHub</p>
            </a>

            <button
              className="display lg:hidden cursor-pointer"
              onClick={() => setOpenNavBar(true)}
            >
              <List className="" size={24} fill="bold" />
            </button>
          </div>
        </nav>
      </header>

      {/* Search Modal */}
      <Modal searchModal={true} open={open} onClose={() => setOpen(false)}>
        <SearchModalLayout searchInputRef={searchInputRef} closeButton={() => setOpen(false)}/>
      </Modal>
      <NavBarMobile open={openNavBar} onClose={() => setOpenNavBar(false)}>
        <div className="bg-white size-full">
          Test
        </div>
      </NavBarMobile>
    </>
  );
};

export default NavBar;
