import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
   console.log("🔥 ProtectedRoute rendered");
      const {currentUser} = useContext(AuthContext);
      console.log("Protected currentUser:", currentUser);

    const isLoggedIn = currentUser !== null;

    if(!isLoggedIn){
        return <Navigate to="/auth/login" replace />
    }
  return (
    <Outlet />
  )
}

export default ProtectedRoute