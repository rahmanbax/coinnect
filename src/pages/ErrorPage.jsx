import { useRouteError } from "react-router-dom";
import NavBar from "../containers/NavBar";
import Footer from "../containers/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-col items-center gap-2 justify-center flex-grow mx-5">
        <p className="font-medium text-2xl text-center">Oops, something went wrong!</p>
        <p>{error.message}</p>
      </div>
      <Footer/>
    </div>
  );
};

export default ErrorPage;
