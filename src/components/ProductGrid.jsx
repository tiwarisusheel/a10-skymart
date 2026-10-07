import { useContext } from "react";
import ProductCard from "./ProductCard";
import { MyProducts } from "../context/ProductContext";

//yaha isInCart check karna hai
const ProductGrid = ({products, setSortBy, sortBy}) => {
  const {cartItems} = useContext(MyProducts);
 
  return (
    <div className="flex-1">

      {/* Result Header */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h2 className="text-xl font-bold text-gray-900">
            All Products
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Showing {products.length} products
          </p>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e)=>setSortBy(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 outline-none focus:border-gray-900 sm:w-auto"
        >
          <option value="default">
            Sort by
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="rating">
            Top Rated
          </option>

          <option value="newest">
            Newest
          </option>
        </select>

      </div>

      {/* Products */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
           
          {products.map((product) => {
            const isInCart = cartItems.find((cartItem)=> cartItem.id === product.id )
            console.log("isInCart:", isInCart)
           return <ProductCard
              key={product.id}
              product={product}
              isInCart={isInCart}
            />
     })}

        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50">

          <div className="text-center">
            <div className="text-4xl">🔍</div>

            <h3 className="mt-3 font-semibold text-gray-900">
              No products found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try changing your filters.
            </p>
          </div>

        </div>
      )}

    </div>
  );
};

export default ProductGrid;