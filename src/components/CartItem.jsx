import { useContext } from "react";
import { MyProducts } from "../context/ProductContext";

const CartItem = ({ cartItem }) => {
  const {IncreaseQuantity, DecreaseQuantity, RemoveCartItem} = useContext(MyProducts);
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">

      <div className="flex flex-col gap-4 sm:flex-row">

        {/* Product Image */}
        <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:h-32 sm:w-32">
          <img
            src={cartItem.images[0]}
            alt={cartItem.title}
            className="h-full w-full object-contain"
          />
        </div>


        {/* Product Details */}
        <div className="flex min-w-0 flex-1 flex-col">

          <div className="flex items-start justify-between gap-3">

            <div>
              <p className="text-xs font-medium capitalize text-gray-400">
                {cartItem.category}
              </p>

              <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-gray-900 sm:text-base">
                {cartItem.title}
              </h3>
            </div>

            <button
              onClick={()=>RemoveCartItem(cartItem.id)}
              type="button"
              className="shrink-0 text-xs font-semibold text-gray-400 transition hover:text-red-500 cursor-pointer"
            >
              Remove
            </button>

          </div>


          {/* Bottom */}
          <div className="mt-4 flex flex-col gap-4 sm:mt-auto sm:flex-row sm:items-end sm:justify-between">

            {/* Quantity */}
            <div>
              <p className="mb-2 text-xs font-medium text-gray-400">
                Quantity
              </p>

              <div className="flex w-fit items-center overflow-hidden rounded-xl border border-gray-200">

                <button
                  onClick={()=>DecreaseQuantity(cartItem.id)}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                >
                  −
                </button>

                <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-200 px-2 text-sm font-semibold text-gray-900">
                  {cartItem.quantity}
                </span>

                <button
                  onClick={()=>IncreaseQuantity(cartItem.id)}
                  type="button"
                  className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                >
                  +
                </button>

              </div>
            </div>


            {/* Price */}
            <div className="sm:text-right">
              <p className="text-xs text-gray-400">
                Price
              </p>

              <p className="mt-1 text-lg font-bold text-gray-900">
                ${cartItem.price}
              </p>
            </div>

          </div>

        </div>

      </div>

    </article>
  );
};

export default CartItem;