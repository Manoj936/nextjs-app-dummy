
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex flex-col justify-center items-center text-center text-white py-20">
   

        <div className="flex flex-col justify-center items-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl animate__animated animate__fadeIn">
            Welcome to <span className="text-yellow-300">MyStore</span>
          </h1>
          <p className="text-lg md:text-xl font-light animate__animated animate__fadeIn animate__delay-1s">
            Find the best products at unbeatable prices.
          </p>

          <Link
            href="/products"
            className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-500 animate__animated animate__fadeIn animate__delay-2s"
          >
            Browse Products
          </Link>
        </div>
      </div>
    </>
  );
}
