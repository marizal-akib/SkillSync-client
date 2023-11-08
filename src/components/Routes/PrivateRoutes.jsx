import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user, loading }= useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
          <div className=" p-80 ml-64 ">
            <span className=" loading loading-bars loading-lg"></span>
          </div>
        );
      }


    if (user) {
        return children;
      }
      return <Navigate state={location.pathname} to="/login"></Navigate>;
    

};

export default PrivateRout;