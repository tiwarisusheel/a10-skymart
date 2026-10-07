import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-black text-white">

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">

        {/* ================= TOP SECTION ================= */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
                M
              </div>

              <span className="text-xl font-bold tracking-tight">
                MyStore
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Discover quality products and enjoy a simple,
              secure and seamless shopping experience.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm transition hover:bg-white hover:text-black"
              >
                I
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm transition hover:bg-white hover:text-black"
              >
                F
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm transition hover:bg-white hover:text-black"
              >
                X
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm transition hover:bg-white hover:text-black"
              >
                in
              </a>

            </div>
          </div>


          {/* Shop */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Shop
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="transition hover:text-white"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="transition hover:text-white"
                >
                  Shopping Cart
                </Link>
              </li>

            </ul>
          </div>


          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Careers
                </a>
              </li>

            </ul>
          </div>


          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition hover:text-white"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* ================= NEWSLETTER ================= */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h3 className="text-lg font-semibold">
                Stay in the loop
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Get updates about new products and special offers.
              </p>
            </div>

            <div className="flex w-full max-w-md gap-2">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus:border-white/30"
              />

              <button
                type="button"
                className="shrink-0 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                Subscribe
              </button>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 MyStore. All rights reserved.
          </p>

          <p>
            Made By ❤️ Susheel Tiwari.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;