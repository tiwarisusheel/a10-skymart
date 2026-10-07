import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 lg:grid lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-black p-6 text-white sm:p-10 lg:min-h-screen lg:p-14">

        {/* Background decoration */}
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10">
          <div className="flex items-center gap-3">
            
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-bold text-black shadow-lg">
              M
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                MyStore
              </h1>

              <p className="text-xs text-gray-400">
                Shop smarter
              </p>
            </div>

          </div>
        </div>


        {/* Main Content */}
        <div className="relative z-10 my-10 max-w-xl lg:my-0">

          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-gray-300">
            Trusted shopping platform
          </span>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Everything you need,
            <span className="block text-gray-400">
              all in one place.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-6 text-gray-400 sm:text-base">
            Discover quality products, manage your account and
            enjoy a simple and seamless shopping experience.
          </p>


          {/* Stats */}
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 sm:gap-5">

            {/* Products */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold sm:text-3xl">
                500+
              </p>

              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Products
              </p>
            </div>


            {/* Users */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold sm:text-3xl">
                10K+
              </p>

              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Users
              </p>
            </div>


            {/* Rating */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold sm:text-3xl">
                4.8
                <span className="ml-1 text-yellow-400">★</span>
              </p>

              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                Rating
              </p>
            </div>

          </div>
        </div>


        {/* Bottom */}
        <div className="relative z-10 hidden text-xs text-gray-500 lg:block">
          © 2026 MyStore. All rights reserved.
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="flex min-h-[calc(100vh-420px)] items-center justify-center bg-white p-5 sm:p-8 lg:min-h-screen lg:p-12">

        <div className="w-full max-w-md">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default AuthLayout;