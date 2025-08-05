
import { NextApiRequest } from "next";
import cookie from "cookie"
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "dev_secret";

export function getUserEmail(req: NextApiRequest): string | null {
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const token = cookies["auth_token"];
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    return decoded.email;
  } catch {
    return null;
  }
}
