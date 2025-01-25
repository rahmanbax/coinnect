import { CaretDown } from "@phosphor-icons/react";
import ButtonPrimary from "./components/ButtonPrimary";
import ButtonSecondary from "./components/ButtonSecondary";
import CoinnectLogo from "./assets/coinnect-logo.png";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="">
        <header>
          <nav>
            <div className="flex gap-10 items-center">
              <a href="">
                <img src={CoinnectLogo} alt="" />
              </a>
              <a href="#">Markets</a>
              <a href="#">Swap</a>
              <a href="#">Portfolio Tracker</a>
              <div className="flex gap-1 items-center">
                <p>More</p>
                <CaretDown size={12} weight="bold" />
              </div>
            </div>
            <div>
              <SearchBar/>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default App;
