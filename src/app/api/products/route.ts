import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Product from '@/models/Product';

// GET all products
export async function GET() {
  await dbConnect();
  const products = await Product.find({});
  return NextResponse.json(products);
}

// POST a new product
export async function POST(req: NextRequest) {
  await dbConnect();
  const { name, price, description } = await req.json();
  const newProduct = await Product.create({ name, price, description });
  return NextResponse.json(newProduct, { status: 201 });
}

//Update a new product
export async function PUT(req: NextRequest) {
    try {
      await dbConnect()
  
      const { id, name, price, description } = await req.json()
  
      // Find and update the product by ID
      const updatedProduct = await Product.findByIdAndUpdate(
        id,
        { name, price, description },
        { new: true } // To return the updated product
      )
  
      if (!updatedProduct) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 })
      }
  
      return NextResponse.json(updatedProduct, { status: 200 })
    } catch (error) {
      console.error(error)
      return NextResponse.json({ error: 'Failed to update product' }, { status: 500 })
    }
  }