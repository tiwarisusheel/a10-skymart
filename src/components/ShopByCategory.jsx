import { useContext } from "react";
import { Link } from "react-router";
import { MyProducts } from "../context/ProductContext";

const ShopByCategory = () => {
      const {products} = useContext(MyProducts);
      const categories = [
  {
    name: "beauty",
    icon: "💄",
    description: "Beauty products for your daily routine."
  },
  {
    name: "fragrances",
    icon: "🌸",
    description: "Discover beautiful fragrances."
  },
  {
    name: "furniture",
    icon: "🚪🪑",
    description: "Discover beautiful furniture."
  },
   {
    name: "groceries",
    icon: "🥭🍩",
    description: "Discover beautiful groceries."
  }
];
  
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <span className="mb-2 inline-block rounded-full bg-black px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              Categories
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Shop by category
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
              Explore our collections and find products that match
              your style and needs.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-gray-500"
          >
            View all

            <span aria-hidden="true">→</span>
          </Link>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const categoryProducts = products.filter(
              (product)=> product.category === category.name
            )
            return(
            <Link
              key={category.name}
              to={`/shop?category=${category.name}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >

              {/* Top Row */}
              <div className="flex items-start justify-between">

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl transition duration-300 group-hover:bg-black group-hover:scale-105">
                  {category.icon}
                </div>

                {/* Product Count Badge */}
                <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold text-gray-600 transition group-hover:bg-black group-hover:text-white">
                  {categoryProducts.length} products
                </span>

              </div>


              {/* Content */}
              <div className="mt-6">

                <h3 className="text-base font-bold text-gray-900">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {category.description}
                </p>

              </div>


              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                <span className="text-xs font-medium text-gray-500">
                  Explore collection
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-700 transition duration-300 group-hover:bg-black group-hover:text-white">
                  →
                </span>

              </div>

            </Link>
            )
})}

        </div>

      </div>

    </section>
  );
};

export default ShopByCategory;