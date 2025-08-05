
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "@/config/db.config";
import Product from "@/db/product.model";
import { getUserEmail } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = getUserEmail(req);
  if (!email) return res.status(401).json({ message: "Unauthorized" });

  await dbConnect();

  if (req.method === "GET") {
    const products = await Product.find({ userEmail: email }).sort({ order: 1 });
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const { name, amount, comment } = req.body;
    const count = await Product.countDocuments({ userEmail: email });
    const product = await Product.create({ name, amount, comment, userEmail: email, order: count });
    return res.status(201).json(product);
  }

  res.status(405).end();
}
