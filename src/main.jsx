import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ProductsProvider } from './context/ProductContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <AuthProvider>
    <ProductsProvider>
      <App />
      <ToastContainer />
    </ProductsProvider>
    </AuthProvider>
   </BrowserRouter>
)
