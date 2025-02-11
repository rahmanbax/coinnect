import React from "react";
import NavBar from "../containers/NavBar";
import ButtonPrimary from "../components/ButtonPrimary";
import Footer from "../containers/Footer";
import { Link } from "react-router-dom";

const IndexPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col items-center gap-4 justify-center flex-grow ">
        <p className="font-medium text-2xl">
          Sorry, this page hasn't finished yet!
        </p>
        <Link to={"/markets"}>
          <ButtonPrimary>Go to Market Page</ButtonPrimary>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;
