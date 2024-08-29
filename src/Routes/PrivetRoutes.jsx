import { Children, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivetRoutes = ({children}) => {
    const {loadings,user} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    if(loadings){
        return <div>Loading...<span className="loading loading-spinner loading-md"></span></div>
    }
    if(user?.email){
        console.log(user.email);
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivetRoutes;