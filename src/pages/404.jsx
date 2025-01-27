import { useRouteError } from "react-router-dom";
import NavBar from "../containers/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <NavBar />
      <p>Something went wrong</p>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorPage;