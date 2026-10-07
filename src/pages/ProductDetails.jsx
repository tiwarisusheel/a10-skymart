import { useContext } from "react";
import { Link, useParams } from "react-router";
import { MyProducts } from "../context/ProductContext";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
     const {products, cartItems, AddToCart, DecreaseQuantity, IncreaseQuantity} = useContext(MyProducts);
     const {id} = useParams();

     const product = products.find((product)=> product.id === Number(id));

     if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Product not found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-700"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const discountedPrice = product.price - (product.price * product.discountPercentage)/100
  const isInCart = cartItems.find((cartItem)=> cartItem.id === product.id)

  console.log("product details isincar", isInCart);

  return (
      <main className="min-h-screen bg-gray-50">

      {/* Breadcrumb */}
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>

            <span>/</span>

            <Link to="/shop" className="hover:text-gray-900">
              Shop
            </Link>

            <span>/</span>

            <span className="truncate text-gray-900">
              {product.title}
            </span>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Images */}
          <div>
            <div className="flex min-h-[450px] items-center justify-center rounded-3xl border border-gray-200 bg-white p-8">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="max-h-[400px] w-full object-contain"
              />
            </div>

            {/* Image thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {product.images?.map((image, index) => (
                <div
                  key={index}
                  className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-white p-3"
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">

            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold capitalize text-gray-700">
                {product.category}
              </span>

              <span className="text-sm text-gray-500">
                SKU: {product.sku}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.title}
            </h1>

            {product.brand && (
              <p className="mt-2 text-sm text-gray-500">
                Brand:{" "}
                <span className="font-semibold text-gray-900">
                  {product.brand}
                </span>
              </p>
            )}

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-lg font-semibold text-gray-900">
                ★ {product.rating}
              </span>

              <span className="text-sm text-gray-400">
                {product.reviews?.length || 0} reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-end gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ${discountedPrice.toFixed(2)}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ${product.price}
              </span>

              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <p className="mt-6 text-sm leading-7 text-gray-600">
              {product.description}
            </p>

            {/* Stock */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Availability
                </span>

                <span className="text-sm font-semibold text-green-600">
                  {product.availabilityStatus}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Stock
                </span>

                <span className="text-sm font-semibold text-gray-900">
                  {product.stock} units
                </span>
              </div>
            </div>

             {
  isInCart && isInCart.quantity >= 1 ? (
    <div className="mt-6 flex w-full items-center gap-3 sm:w-fit">

      {/* Quantity Controller */}
      <div className="flex h-12 w-full items-center justify-between overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm sm:w-fit">

        {/* Decrease */}
        <button
          onClick={() => DecreaseQuantity(product.id)}
          type="button"
          className="flex h-full w-14 items-center justify-center text-xl font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 cursor-pointer"
        >
          −
        </button>

        {/* Quantity */}
        <span className="flex h-full min-w-14 items-center justify-center border-x border-gray-200 px-4 text-base font-semibold text-gray-900">
          {isInCart.quantity}
        </span>

        {/* Increase */}
        <button
          onClick={() => IncreaseQuantity(product.id)}
          type="button"
          className="flex h-full w-14 items-center justify-center text-xl font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 active:bg-gray-200 cursor-pointer"
        >
          +
        </button>

      </div>

      {/* Wishlist */}
      <button
        type="button"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-xl text-gray-500 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:text-red-500 active:scale-95 cursor-pointer"
        aria-label="Add to wishlist"
      >
        ♡
      </button>

    </div>
  ) : (
    <div className="mt-6 flex w-full gap-3">

      {/* Add to Cart */}
      <button
        onClick={() => AddToCart(product)}
        type="button"
        className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98] cursor-pointer"
      >
        Add to Cart
      </button>

      {/* Wishlist */}
      <button
        type="button"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-xl text-gray-500 shadow-sm transition hover:border-gray-300 hover:bg-gray-50 hover:text-red-500 active:scale-95 cursor-pointer"
        aria-label="Add to wishlist"
      >
        ♡
      </button>

    </div>
  )
}

            {/* Product information */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white p-4">
                <p className="text-xs text-gray-400">Shipping</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {product.shippingInformation}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-xs text-gray-400">Warranty</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {product.warrantyInformation}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-xs text-gray-400">Return Policy</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {product.returnPolicy}
                </p>
              </div>

              <div className="rounded-xl bg-white p-4">
                <p className="text-xs text-gray-400">Min. Order</p>
                <p className="mt-1 text-sm font-semibold text-gray-900">
                  {product.minimumOrderQuantity}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Reviews */}
        <section className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Customer Reviews
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {product.reviews?.map((review, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">
                    {review.reviewerName}
                  </span>

                  <span className="text-sm">
                    ★ {review.rating}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {review.comment}
                </p>
              </div>
            ))}
          </div>
        </section>

      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
         <RelatedProducts product={product}  />
      </section>
    </main>
  );
};

export default ProductDetails;