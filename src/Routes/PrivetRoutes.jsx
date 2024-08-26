import { Children, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";

const PrivetRoutes = ({children}) => {
    const {loadings,user} = useContext(AuthContext);
    if(loadings){
        return <div>Loading...<span className="loading loading-spinner loading-md"></span></div>
    }
    if(user?.email){
        console.log(user.email);
        return children;
    }
    return <Navigate to='/login' replace></Navigate>;
};

export default PrivetRoutes;