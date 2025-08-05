
import mongoose from "mongoose";

export const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const uri = process.env.MONGODB_URI as string;
  if (!uri) throw new Error("MONGODB_URI is not defined");

  await mongoose.connect(uri);
};
