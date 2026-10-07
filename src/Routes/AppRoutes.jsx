import { Navigate, Route, Routes } from "react-router"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Home from "../pages/Home"
import AuthLayout from "../Layout/AuthLayout"
import Shop from "../pages/Shop"
import About from "../pages/About"
import Cart from "../pages/Cart"
import MainLayout from "../Layout/MainLayout"
import ProductDetails from "../pages/ProductDetails"
import ProtectedRoute from "../components/ProtectedRoute"

const AppRoutes = () => {
   console.log("🔥 AppRoutes rendered");
  return (
    <div>
        <Routes>
          <Route element={<ProtectedRoute />} >
          <Route element={<MainLayout />}>
               <Route path="/" element={<Home />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/about" element={<About />}/>
               <Route path="/cart" element={<Cart />} />
               <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
          </Route>

           <Route path="/auth" element={<AuthLayout />} >
                  <Route index element={<Navigate to="login" replace />} />
                  <Route path="login" element={<Login />} />
                  <Route path="signup" element={<SignUp />} />
            </Route>
        </Routes>
    </div>
  )
}

export default AppRoutes