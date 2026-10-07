import { useContext } from "react";
import { Link } from "react-router";
import { MyProducts } from "../context/ProductContext";

const ShoppingStats = () => {
  const {cartItems, getCartTotals} = useContext(MyProducts);
  const {total} = getCartTotals();
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

          {/* ================= CART ITEMS ================= */}
          <Link
            to="/cart"
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 transition hover:border-gray-300 hover:bg-gray-100 sm:px-5"
          >
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.086.836l.364 1.364m0 0L6.75 15.75h10.5l2.25-10.5H5.086ZM6.75 15.75h10.5m-10.5 0a1.5 1.5 0 1 0 0 3h10.5a1.5 1.5 0 1 0 0-3m-10.5 0L5.086 5.2M9 21a.75.75 0 1 1-1.5 0A.75.75 0 0 1 9 21Zm8.25 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="truncate text-xs text-gray-500">
                  Cart Items
                </p>

                <p className="text-lg font-bold text-gray-900">
                  {cartItems.length}
                </p>
              </div>

            </div>

            <span className="shrink-0 rounded-full bg-black px-2.5 py-1 text-[10px] font-semibold text-white">
              4 items
            </span>
          </Link>

          <Link
            to="/cart"
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 transition hover:border-gray-300 hover:bg-gray-100 sm:px-5"
          >
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.5c.7.7 1.7 1.1 3 1.1 1.9 0 3.25-.9 3.25-2.3 0-1.5-1.35-2.1-3.25-2.6-1.9-.5-3.25-1.1-3.25-2.6 0-1.4 1.35-2.3 3.25-2.3 1.3 0 2.3.4 3 1.1M5 4.5h14"
                  />
                </svg>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Cart Value
                </p>

                <p className="text-lg font-bold text-gray-900">
                  {total.toFixed(2)}
                </p>
              </div>

            </div>

            <span className="shrink-0 rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-semibold text-green-700">
              Ready
            </span>
          </Link>

          {/* <Link
            to="/bookmarks"
            className="group flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 transition hover:border-gray-300 hover:bg-gray-100 sm:px-5"
          >
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 4.5A2.25 2.25 0 0 1 9 2.25h6a2.25 2.25 0 0 1 2.25 2.25v16.5l-5.25-3-5.25 3V4.5Z"
                  />
                </svg>
              </div>

              <div>
                <p className="text-xs text-gray-500">
                  Bookmarked
                </p>

                <p className="text-lg font-bold text-gray-900">
                  8
                </p>
              </div>

            </div>

            <span className="shrink-0 rounded-full bg-yellow-100 px-2.5 py-1 text-[10px] font-semibold text-yellow-700">
              Saved
            </span>
          </Link> */}

        </div>

      </div>
    </section>
  );
};

export default ShoppingStats;