import { useContext } from "react";
import { MyProducts } from "../context/ProductContext";
import { Link } from "react-router";

const ProductCard = ({ product, isInCart }) => {
  const {IncreaseQuantity, DecreaseQuantity, AddToCart} = useContext(MyProducts);

 

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
      <div className="relative flex h-60 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-gray-900 hover:text-white"
        >
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Category */}
        <p className="text-xs font-medium capitalize text-gray-400">
          {product.category}
        </p>

        {/* Title */}
        <h3 className="mt-1 line-clamp-2 min-h-[40px] text-sm font-semibold leading-5 text-gray-900">
          {product.title}
        </h3>
        </div>
        
        <div className="mt-1 flex items-center gap-1 px-6">

          <span className="text-sm font-semibold text-gray-900">
            ★ {product.rating}
          </span>

          <span className="text-xs text-gray-400">
            ({product.stock})
          </span>

        </div>
        </Link>

        <div className="mt-4 flex items-center justify-between gap-1 py-2 px-6">

          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
           
           {
             isInCart && isInCart.quantity >= 1 ? (
              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200">

                <button
                  onClick={()=>DecreaseQuantity(product.id)}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                >
                  −
                </button>

                <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-2 text-sm font-semibold text-gray-900">
                  {isInCart.quantity}
                </span>

                <button
                  onClick={()=>IncreaseQuantity(product.id)}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                >
                  +
                </button>

              </div>
             ):(
              <button
            onClick={()=>AddToCart(product)}
            type="button"
            className="rounded-xl bg-gray-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-gray-700"
          >
            Add to Cart
          </button>
             )
           }
        </div>
    </article>
  );
};

export default ProductCard;