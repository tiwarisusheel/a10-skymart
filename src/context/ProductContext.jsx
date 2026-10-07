import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyProducts = createContext();

export const ProductsProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItem] = useState(()=>{
   return JSON.parse(localStorage.getItem("cartItems")) || []
  });

  console.log("products:", products)
  console.log("cartItems", cartItems)

  const GetProducts = async ()=>{
    try {
        const res = await axios.get("https://dummyjson.com/products");
        const products = res.data.products;
        const removeIds = [17, 19, 24 ];
        const productAfterSkip = products.filter((product)=> !removeIds.includes(product.id))
        setProducts(productAfterSkip);
    } catch (error) {
        console.log("Error in fetching Api", error)
    }
  }

  useEffect(()=>{
    GetProducts();
  }, [])


  const IncreaseQuantity = (id) =>{
    setCartItem((prev)=>{
      const updatedCartPlus =  prev.map((cartItem)=>{
        return cartItem.id === id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
      })
      localStorage.setItem("cartItems", JSON.stringify(updatedCartPlus));
      return updatedCartPlus;
    })
  }

  const DecreaseQuantity = (id)=>{
    setCartItem((prev)=>{
      const updatedCartMinus = prev.map((cartItem)=>{
        return cartItem.id === id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem;
      }).filter((cartItem)=> cartItem.quantity > 0);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartMinus));
      return updatedCartMinus;
    })
  }


  const RemoveCartItem = (id) =>{
    setCartItem((prev)=>{
      const updatedCartRemove = prev.filter((cartItem)=>{
        return cartItem.id !== id ;
      })
      localStorage.setItem("cartItems", JSON.stringify(updatedCartRemove));
      return updatedCartRemove;
    })
  }

  const getCartTotals = ()=>{
    const subTotal = cartItems.reduce((total, item)=>{
    return total + item.price * item.quantity;
  }, 0)

  const discount = cartItems.reduce((total, item)=>{
    const itemDiscount = 
    (item.price * item.discountPercentage / 100) * item.quantity;
     
    return total + itemDiscount;
  }, 0)

  const delivery = 0;

  const total = subTotal + delivery - discount;

  return {
    total,
    subTotal,
    discount,
    delivery
  }
  }


   const AddToCart = (product)=>{
    console.log("🔥 AddToCart CALLED", product.id);
   const newLocalStCart = [...cartItems, {...product, quantity: 1}];
   setCartItem(newLocalStCart)
   localStorage.setItem("cartItems", JSON.stringify(newLocalStCart));
  }


    return (
    <MyProducts.Provider 
    value={{products, 
    cartItems, 
    setCartItem, 
    IncreaseQuantity,
    DecreaseQuantity,
    RemoveCartItem,
    getCartTotals,
    AddToCart
    }}>
        {children}
    </MyProducts.Provider>
    )
}