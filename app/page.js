import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { fetchProducts } from "@/lib/api";

export default async function Home() {

  const products = await fetchProducts();
  
  return (
    <>
        
         <Hero/>
    <section className="py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
          {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
          </div>
        </div>
      </section>
         
    </>
  );
}
