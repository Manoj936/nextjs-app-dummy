"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProductType {
  _id: string;
  name: string;
  price: number;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const router = useRouter();

  // Fetch products from the database
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      {/* Go Back Button */}
      <button
        onClick={() => router.back()} // Go back to the previous page
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Go Back
      </button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-lg rounded-md p-4">
            <h2 className="text-xl font-semibold text-gray-500">
              {product.name}
            </h2>
            <p className="text-gray-500">${product.price}</p>
            <button
              onClick={() => router.push(`/products/${product._id}`)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {/* <button
        onClick={() => router.push('/products/add')}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add New Product
      </button> */}
    </div>
  );
};

export default ProductsPage;
