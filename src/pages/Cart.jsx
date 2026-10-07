import { useContext } from "react";
import { Link } from "react-router";
import CartItem from "../components/CartItem";
import { MyProducts } from "../context/ProductContext";

const Cart = () => {
  const { cartItems, getCartTotals } = useContext(MyProducts);
  const {total, subTotal, discount} = getCartTotals();



  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          
          <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
            Your Shopping Bag
          </span>

          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Review your items before placing your order.
          </p>

        </div>
      </section>


      {/* Cart Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* Cart Items */}
          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">
                Your Items
              </h2>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-500 shadow-sm">
                {cartItems.length} Items
              </span>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">

                <div className="text-5xl">
                  🛒
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  Your cart is empty
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  Looks like you haven't added anything to your cart yet.
                </p>

                <Link
                  to="/shop"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
                >
                  Continue Shopping
                  <span>→</span>
                </Link>

              </div>
            )}

          </div>


          {/* Order Summary */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 lg:sticky lg:top-6">

            <h2 className="text-lg font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-semibold text-gray-900">
                 ${(subTotal).toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Delivery
                </span>

                <span className="font-semibold text-gray-900">
                  Free
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">
                  Discount
                </span>

                <span className="font-semibold text-gray-900">
                  - ${(discount).toFixed(2)}
                </span>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-900">
                  Total
                </span>

                <span className="text-2xl font-bold text-gray-900">
                 ${(total).toFixed(2)}
                </span>
              </div>

            </div>

            <button
              type="button"
              className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="mt-3 flex w-full items-center justify-center rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Continue Shopping
            </Link>

            {/* Trust */}
            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">🔒</span>

                <div>
                  <p className="text-xs font-semibold text-gray-900">
                    Secure Checkout
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    Your order and payment information are protected.
                  </p>
                </div>
              </div>
            </div>

          </aside>

        </div>

      </section>

    </main>
  );
};

export default Cart;