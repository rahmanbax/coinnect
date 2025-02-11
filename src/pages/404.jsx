import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";
import ButtonPrimary from "../components/ButtonPrimary";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col items-center gap-2 justify-center flex-grow ">
        <div className="flex flex-col items-center gap-4 justify-center flex-grow ">
          <p className="font-medium text-2xl">Oops, we can't find page you are looking for!</p>
          <Link to={"/"}>
            <ButtonPrimary>Go to Home Page</ButtonPrimary>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
