import { useContext } from "react";
import { MyProducts } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const RelatedProducts = ({product}) => {
      const {products, cartItems} = useContext(MyProducts);

      const relatedProducts = products.filter((item)=>
        item.category === product.category && item.id !== product.id
    ).slice(0, 4);

  return (
    <section className="mt-10">
      {/* Section Header */}
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
            You may also like
          </p>

          <h2 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
            Related Products
          </h2>
        </div>

        <button
          type="button"
          className="hidden text-sm font-semibold text-gray-900 hover:text-gray-500 sm:block"
        >
          View All →
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {relatedProducts.map((product) => {
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
    </section>
  );
};

export default RelatedProducts;