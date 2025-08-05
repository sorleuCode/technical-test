import mongoose, { Schema, Document } from "mongoose";

export interface ProductDocument extends Document {
  userEmail: string;
  name: string;
  amount: number;
  comment?: string;
  order?: number;
}

const ProductSchema = new Schema<ProductDocument>({
  userEmail: { type: String, required: true },
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  comment: { type: String },
  order: { type: Number, default: 0 },
});

export default mongoose.models.Product || mongoose.model<ProductDocument>("Product", ProductSchema);
