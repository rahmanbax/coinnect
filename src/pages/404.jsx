import { useRouteError } from "react-router-dom";
import NavBar from "../containers/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center gap-2 justify-center">
        <p>Something went wrong</p>
        <p>{error.message}</p>
      </div>
    </div>
  );
};

export default ErrorPage;
