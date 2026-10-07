import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Hero = () => {
      const {currentUser} = useContext(AuthContext);
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gray-200/70 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gray-200/70 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-5 lg:px-8 lg:py-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs font-medium text-gray-600 sm:text-sm">
                Welcome back, {currentUser.name}
              </span>
            </div>


            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Find something
              <span className="block text-gray-400">
                you'll love.
              </span>
            </h1>


            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Explore our collection of quality products, discover
              great deals and enjoy a simple shopping experience
              designed just for you.
            </p>


            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]"
              >
                Shop Now
              </Link>

              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 active:scale-[0.98]"
              >
                View All Products
              </Link>

            </div>


            {/* Product Count */}
            <div className="mt-8 flex items-center gap-3">

              <div className="flex -space-x-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-200 text-xs font-bold">
                  1
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-300 text-xs font-bold">
                  2
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-50 bg-gray-400 text-xs font-bold">
                  3
                </div>

              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  500+ Products
                </p>

                <p className="text-xs text-gray-500">
                  Available to explore
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl bg-black p-6 text-white shadow-2xl sm:p-8">

              {/* Decorative circles */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
              <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full border border-white/10" />

              <div className="relative">

                {/* Small label */}
                <span className="inline-block rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-300">
                  Today's highlights
                </span>


                <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
                  Great products.
                  <span className="block text-gray-400">
                    Better experience.
                  </span>
                </h2>


                <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
                  Shop confidently with offers and services
                  designed to make every order easier.
                </p>


                {/* Offers */}
                <div className="mt-7 space-y-3">

                  {/* Free Delivery */}
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-black">
                      🚚
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Free Delivery
                      </h3>

                      <p className="mt-0.5 text-xs text-gray-400">
                        On eligible orders
                      </p>
                    </div>

                  </div>


                  {/* Secure Payment */}
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-black">
                      🔒
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Secure Payment
                      </h3>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Safe and protected checkout
                      </p>
                    </div>

                  </div>


                  {/* Easy Returns */}
                  <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-black">
                      ↩
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        Easy Returns
                      </h3>

                      <p className="mt-0.5 text-xs text-gray-400">
                        Simple and hassle-free returns
                      </p>
                    </div>

                  </div>

                </div>


                {/* Offer Badge */}
                <div className="mt-6 flex items-center justify-between rounded-xl bg-white px-4 py-3 text-black">

                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Special offer
                    </p>

                    <p className="text-sm font-bold">
                      Up to 30% off
                    </p>
                  </div>

                  <Link
                    to="/shop"
                    className="rounded-lg bg-black px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800"
                  >
                    Explore
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM BENEFITS ================= */}
        <div className="mt-14 grid gap-4 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-3">
            <span className="text-xl">⚡</span>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Fast Delivery
              </p>

              <p className="text-xs text-gray-500">
                Quick doorstep delivery
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <span className="text-xl">🛡️</span>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Trusted Products
              </p>

              <p className="text-xs text-gray-500">
                Quality you can trust
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <span className="text-xl">💳</span>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Secure Checkout
              </p>

              <p className="text-xs text-gray-500">
                Safe payment experience
              </p>
            </div>
          </div>


          <div className="flex items-center gap-3">
            <span className="text-xl">↩️</span>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Easy Returns
              </p>

              <p className="text-xs text-gray-500">
                Hassle-free returns
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;