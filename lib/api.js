

export const fetchProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate: 60 }, // optional ISR (revalidate every 60 sec)
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
};


export const getProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  };