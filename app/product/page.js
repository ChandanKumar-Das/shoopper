import { ProductCard } from '@/components/ProductCard'
import { fetchProducts } from '@/lib/api';
import React from 'react'

 const Product = async () => {
    const products = await fetchProducts();
  return (
    <>
     <section className="py-20">
     <div className="container mx-auto">
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
          </div>
          </div>
          </section>
    </>
  )
}

export default Product;