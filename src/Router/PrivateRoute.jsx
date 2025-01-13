import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jobPortalContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(jobPortalContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={location?.pathname}/>;
};

export default PrivateRoute;
