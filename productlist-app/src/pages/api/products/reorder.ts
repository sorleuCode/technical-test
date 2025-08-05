import type { NextApiRequest, NextApiResponse } from "next";
import {dbConnect} from "@/config/db.config";          // Ensure this is default export
import Product from "@/db/product.model";              // ✅ move model out of pages/api
import { getUserEmail } from "@/lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "PATCH") return res.status(405).json({ message: "Method Not Allowed" });

  const email = getUserEmail(req);
  if (!email) return res.status(401).json({ message: "Unauthorized" });

  const { orderedIds } = req.body;
  if (!Array.isArray(orderedIds)) return res.status(400).json({ message: "Invalid payload" });

  await dbConnect();

  await Promise.all(
    orderedIds.map((id: string, index: number) =>
      Product.updateOne({ _id: id, userEmail: email }, { order: index }).exec()
    )
  );

  return res.status(200).json({ message: "Order updated" });
}
