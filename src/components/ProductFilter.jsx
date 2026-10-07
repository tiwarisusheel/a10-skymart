import { useSearchParams } from "react-router";

const ProductFilter = ({filters, setFilters, clearFilters}) => {
    const [searchParams, setSearchParams] = useSearchParams();
  return (
    <aside className="w-full rounded-2xl border border-gray-200 bg-white p-5 lg:w-64 lg:shrink-0">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Filters
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Refine your products
          </p>
        </div>

        <button 
        onClick={clearFilters}
        className="text-xs font-semibold text-gray-500 hover:text-gray-900">
          Clear All
        </button>
      </div>

      <div className="my-5 h-px bg-gray-100" />

      {/* Category */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Category
        </h3>

        <div className="space-y-3">

          <label className="flex cursor-pointer items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                value="beauty"
                checked={filters.category === "beauty"}
                onChange={(e)=> 
                  {
                    setFilters((prev)=>({...prev, category: e.target.checked ? e.target.value : "",}))
                    setSearchParams({});
                }}
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-600">
                beauty
              </span>
            </div>

            <span className="text-xs text-gray-400">
              55
            </span>
          </label>

          <label className="flex cursor-pointer items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                checked={filters.category === "fragrances"}
                value="fragrances"
                onChange={(e)=>
                  {
                    setFilters((prev)=> ({...prev, category: e.target.checked ? e.target.value : "", }))
                    setSearchParams({});
                }
                }
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-600">
               fragrances
              </span>
            </div>

            <span className="text-xs text-gray-400">
              62
            </span>
          </label>

          <label className="flex cursor-pointer items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                checked={filters.category === "furniture"}
                value="furniture"
                onChange={(e)=>
                  {
                    setFilters((prev)=>({...prev, category: e.target.checked ? e.target.value : "",}))
                    setSearchParams({});
                }
                }
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-600">
                furniture
              </span>
            </div>

            <span className="text-xs text-gray-400">
              35
            </span>
          </label>

          <label className="flex cursor-pointer items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                checked={filters.category === "groceries"}
                value="groceries"
                onChange={(e)=>
                  {
                    setFilters((prev)=>({...prev, category: e.target.checked ? e.target.value : "",}))
                    setSearchParams({});
                }
                }
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              <span className="text-sm text-gray-600">
                groceries
              </span>
            </div>

            <span className="text-xs text-gray-400">
              54
            </span>
          </label>

        </div>
      </div>

      <div className="my-6 h-px bg-gray-100" />

      {/* Price */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Price Range
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={(e)=>setFilters((prev)=>({...prev, minPrice: e.target.value }))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900"
          />

          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={(e)=>setFilters((prev)=>({...prev, maxPrice: e.target.value }))}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900"
          />
        </div>
      </div>

      <div className="my-6 h-px bg-gray-100" />

      {/* Rating */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-gray-900">
          Rating
        </h3>

        <div className="space-y-3">

          <label className="flex cursor-pointer items-center gap-2">
            <input
              value="4.5"
              type="radio"
              name="rating"
              checked={filters.rating === "4.5"}
              onChange={(e)=>setFilters((prev)=>({...prev, rating: e.target.value }))}
              className="h-4 w-4"
            />

            <span className="text-sm text-gray-600">
              ★ 4.5 & above
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              value="4.0"
              type="radio"
              name="rating"
              checked={filters.rating === "4.0"}
              onChange={(e)=>setFilters((prev)=>({...prev, rating: e.target.value }))}
              className="h-4 w-4"
            />

            <span className="text-sm text-gray-600">
              ★ 4.0 & above
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              value="3.0"
              type="radio"
              name="rating"
              checked={filters.rating === "3.0"}
              onChange={(e)=>setFilters((prev)=>({...prev, rating: e.target.value}))}
              className="h-4 w-4"
            />

            <span className="text-sm text-gray-600">
              ★ 3.0 & above
            </span>
          </label>

        </div>
      </div>

      <div className="my-6 h-px bg-gray-100" />

      {/* Availability */}
      <label className="flex cursor-pointer items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            In Stock
          </h3>
          <p className="mt-1 text-xs text-gray-400">
            Show available products
          </p>
        </div>

        <input
          type="checkbox"
          checked={filters.inStock}
          onChange={(e)=>setFilters((prev)=>({...prev, inStock: e.target.checked}))}
          className="h-4 w-4 rounded border-gray-300"
        />
      </label>

    </aside>
  );
};

export default ProductFilter;