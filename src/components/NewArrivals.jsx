import { useContext } from "react";
import { Link } from "react-router";
import { MyProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
      const {products, cartItems} = useContext(MyProducts);
      const newProducts = [...products]
      .sort((a ,b)=> new Date (b.meta.createdAt) - new Date (a.meta.createdAt) )
      .slice(0, 5)
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              ✨ Just Added
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              New Arrivals
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
              Discover the latest products added to our collection.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex w-fit items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-700"
          >
            See All
            <span>→</span>
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {newProducts.map((product) => {
            const isInCart = cartItems.find((cartItem)=>
              cartItem.id === product.id
            )
            return (
            <ProductCard
            key={product.id}
            product={product}
            isInCart={isInCart}
             />
          )
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;