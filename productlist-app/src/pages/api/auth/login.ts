
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import cookie from "cookie";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { email } = req.body;
  if (!email || !email.includes("@")) return res.status(400).json({ message: "Invalid email" });

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "7d" });

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    })
  );

  res.status(200).json({ message: "Logged in" });
}
