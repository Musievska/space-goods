import { getProducts, getTotalProductCount } from "@/lib/data";
import { Pagination } from "@/ui/Pagination";
import { ProductCard } from "@/ui/ProductCard";
// import { Search } from "@/ui/Search";

import { Suspense } from "react";

export default async function ProductPage({ params }) {
  const page = parseInt(params.page) || 1;
  const limit = 6;

  // Data fetching logic
  const products = await getProducts({ page, limit });
  const totalProductCount = await getTotalProductCount();
  const totalPages = Math.ceil(totalProductCount / limit);

  return (
    <div 
    className="mx-auto max-w-8xl">
      <h1>Products</h1>
      {/* <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search for space goods..." />
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        baseUrl="/products"
      />
    </div>
  );
}
