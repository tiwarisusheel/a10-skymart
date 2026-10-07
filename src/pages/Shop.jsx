import { useContext, useState } from "react"
import ProductFilter from "../components/ProductFilter"
import ProductGrid from "../components/ProductGrid"
import { MyProducts } from "../context/ProductContext"
import { useSearchParams } from "react-router";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category")
  const { products } = useContext(MyProducts);
  const [filters, setFilters] = useState({
    category:categoryFromUrl || "",
    minPrice:"",
    maxPrice:"",
    rating:"",
    inStock: false,
  })
  const [sortBy, setSortBy] = useState("default");

  // console.log("categoryFromUrl", categoryFromUrl)

  console.log("filters", filters)

  const filteredProducts = products.filter((product)=>{

    // if(categoryFromUrl && product.category !== categoryFromUrl ){
    //       return false;
    // }

     if(filters.category && product.category !== filters.category){
      return false;
     }

     if(filters.minPrice && product.price < Number(filters.minPrice) ){
      return false;
     }

     if(filters.maxPrice && product.price > Number(filters.maxPrice)){
      return false;
     }

     if(filters.rating && product.rating < Number(filters.rating)){
      return false;
     }

     if(filters.inStock && product.stock <= 0){
      return false;
     }

    return true
  })

  const sortedProducts = [...filteredProducts]

  if(sortBy === "price-low"){
      sortedProducts.sort((a, b)=> a.price - b.price)
  }

  if(sortBy === "price-high"){
    sortedProducts.sort((a, b)=> b.price - a.price)
  }

  if(sortBy === "rating"){
    sortedProducts.sort((a, b)=> b.rating - a.rating)
  }

  if(sortBy === "newest"){
    sortedProducts.sort((a, b)=> new Date (b.meta.createdAt) - new Date (a.meta.createdAt))
  }

  const clearFilters = () =>{
    setFilters({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
    inStock: false,
    })
  }


  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Shop
          </h1>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Discover products you'll love.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          
          
          <ProductFilter clearFilters={clearFilters} filters={filters} setFilters={setFilters} />

          
          <ProductGrid products={sortedProducts} setSortBy={setSortBy} sortBy={sortBy} />

        </div>

      </section>

    </main>
  );
};

export default Shop