import { Link } from "react-router";

const About = () => {
  return (
    <main className="w-full bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-gray-300">
              <span className="h-2 w-2 rounded-full bg-white" />
              About MyStore
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Shopping should be
              <span className="block text-gray-400">
                simple and enjoyable.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
              MyStore brings fashion, electronics, jewellery and everyday
              essentials together in one simple shopping experience.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/shop"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-200 sm:w-auto"
              >
                Browse Products
                <span>→</span>
              </Link>

              <a
                href="#story"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Our Story
              </a>

            </div>
          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-200 sm:grid-cols-4">

          <div className="px-4 py-7 text-center sm:py-9">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              500+
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Products
            </p>
          </div>

          <div className="px-4 py-7 text-center sm:py-9">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              10K+
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Customers
            </p>
          </div>

          <div className="border-t border-gray-200 px-4 py-7 text-center sm:border-t-0 sm:py-9">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              4.8
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Customer Rating
            </p>
          </div>

          <div className="border-t border-gray-200 px-4 py-7 text-center sm:border-t-0 sm:py-9">
            <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              24/7
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Online Shopping
            </p>
          </div>

        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section id="story" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">

          {/* Visual */}
          <div className="relative">

            <div className="flex min-h-[380px] items-center justify-center overflow-hidden rounded-3xl bg-gray-900 p-8 sm:min-h-[450px]">

              <div className="text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-4xl font-black text-gray-950 shadow-xl">
                  M
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">
                  MyStore
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
                  One place for discovering products you love.
                </p>

              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 right-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl sm:right-8">
              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-bold text-gray-900">
                    Customer First
                  </p>
                  <p className="text-xs text-gray-500">
                    Always our priority
                  </p>
                </div>

              </div>
            </div>

          </div>


          {/* Content */}
          <div>

            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Our Story
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Built to make online shopping easier.
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
              MyStore started with a simple idea — shopping online should not
              feel complicated. Customers should be able to discover products,
              explore different categories and make their choices comfortably.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              That's why we created a clean and simple shopping experience
              where products are easy to discover and the entire journey feels
              straightforward.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Whether you are looking for something for yourself, your home or
              someone special, MyStore gives you a place to start exploring.
            </p>

          </div>

        </div>
      </section>


      {/* ================= VALUES ================= */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">

            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
              What Matters To Us
            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our values
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
              The principles behind the shopping experience we are building.
            </p>

          </div>


          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card */}
            <div className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                🎯
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Simplicity
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We keep the shopping experience clean, simple and easy to
                understand.
              </p>

            </div>


            {/* Card */}
            <div className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                ❤️
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Customers
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Every part of the experience is designed with customers in
                mind.
              </p>

            </div>


            {/* Card */}
            <div className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                🔒
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Trust
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We aim to create a reliable and comfortable shopping
                environment.
              </p>

            </div>


            {/* Card */}
            <div className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-xl">
                ✨
              </div>

              <h3 className="mt-5 font-bold text-gray-900">
                Quality
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                We want customers to discover products that fit their needs
                and expectations.
              </p>

            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Discover our latest products and find something you will love.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
          >
            Browse Products
            <span>→</span>
          </Link>

        </div>
      </section>

    </main>
  );
};

export default About;