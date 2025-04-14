import { getProduct } from "@/lib/api";

const ProductDetails = async ({
  params
}) => {
  const product = await getProduct(params.id);
  

  return (
    <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-xs" src={product.image} alt={product.title} />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{product.title}</h1>
            <div className="text-2xl text-red-500 font-medium mb-6">${product.price}</div>
            <p className="mb-8">{product.description}</p>
            <button className="bg-gray-200 text-black font-semibold py-4 px-8">Add to cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
