import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { MyProducts } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {cartItems,} = useContext(MyProducts)
  const {currentUser, logOut} = useContext(AuthContext);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link to="/" className="flex shrink-0 items-center gap-2.5">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
            M
          </div>

          <span className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
            MyStore
          </span>

        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className="text-sm font-medium text-gray-900 transition hover:text-gray-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Shop
          </NavLink>
          
          <NavLink
            to="/about"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            About
          </NavLink>

        </div>


        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* User Name */}
          <div className="hidden items-center gap-2 sm:flex">

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-700">
              🙍‍♂️
            </div>

            <span className="max-w-[100px] truncate text-sm font-medium text-gray-700">
              {currentUser.name}
            </span>

          </div>


          {/* Cart */}
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 hover:text-black"
          >
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

            {/* Cart Count */}
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
              {cartItems.length}
            </span>
          </Link>
          <button
            type="button"
            onClick={logOut}
            className="hidden rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 hover:text-black sm:block cursor-pointer"
          >
            Logout
          </button>


          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

        </div>

      </div>

      <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">

        <div className="flex flex-col gap-1">

          <Link
            to="/"
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100"
          >
            Shop
          </Link>

          <Link
            to="/about"
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100"
          >
            About
          </Link>

          <button
            type="button"
            onClick={logOut}
            className="mt-1 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-red-600 hover:bg-red-50 cursor-pointer"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;