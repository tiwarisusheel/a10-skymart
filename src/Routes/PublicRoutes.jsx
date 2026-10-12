import { useContext } from "react"
import { Outlet, Navigate } from "react-router"
import { AuthContext } from "../context/AuthContext"

const PublicRoutes = () => {
 const {currentUser} = useContext(AuthContext);
    
    if(currentUser){
        return <Navigate to={"/"} />
    }
  return (
        <Outlet />
  )
}

export default PublicRoutes