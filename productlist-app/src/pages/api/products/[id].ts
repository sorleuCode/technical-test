import type { NextApiRequest, NextApiResponse } from "next";
import {dbConnect} from "@/config/db.config"; 
import Product from "@/db/product.model";
import { getUserEmail } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const email = getUserEmail(req);
  if (!email) return res.status(401).json({ message: "Unauthorized" });

  await dbConnect();

  const { id } = req.query;
  if (!id || Array.isArray(id)) return res.status(400).json({ message: "Invalid ID" });

  if (req.method === "PATCH") {
    const product = await Product.findOneAndUpdate(
      { _id: id, userEmail: email },
      req.body,
      { new: true }
    );

    if (!product) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json(product);
  }

  if (req.method === "DELETE") {
    const deleted = await Product.findOneAndDelete({ _id: id, userEmail: email });
    if (!deleted) return res.status(404).json({ message: "Product not found" });

    return res.status(200).json({ message: "Deleted" });
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
