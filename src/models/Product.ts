import { Schema, model, Document } from 'mongoose';

interface Product extends Document {
  name: string;
  price: number;
  description?: string;
  createdAt: Date;
}

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Product = model<Product>('Product', productSchema);

export default Product;