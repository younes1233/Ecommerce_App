import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { useStateContext } from '../../contexts/ContextProvider';

//import AuthContext from "./AuthContext";

const ProtectedRoutes = () =>{
    const { isAuthenticated, setisAuthenticated } = useStateContext();

   //const { isLoggedIn } = useContext(AuthContext);
    const user = localStorage.isAuthenticated;
    console.log("user is"+user)
    return user? <Outlet /> : <Navigate to="/lb-admin" />
}

export default ProtectedRoutes;