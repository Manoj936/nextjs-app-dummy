// src/app/products/add/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProductPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, description }),
      });

      if (!res.ok) {
        throw new Error("Failed to add product");
      }
      // Navigate to the products page after adding a new product
      router.push("/products");
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Product</h1>
      {/* Go Back Button */}
      <button
        onClick={() => router.push("/")} // Go back to the previous page
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        Home
      </button>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-lg font-medium text-gray-700"
          >
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Product Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
