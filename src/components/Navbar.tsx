"use client";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-blue-800 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MyStore
        </Link>
        <div className="space-x-2">
          <Link href="/products">Products</Link>
          {isSignedIn ? (
            <>
              <Link href="/products/add">Add Product</Link>
              <UserButton />
            </>
          ) : (
            <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              <SignInButton mode="modal" />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
