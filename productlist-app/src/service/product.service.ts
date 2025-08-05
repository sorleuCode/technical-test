import { Product } from "@/types/product.type";

// Fetch all products for the logged-in user
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

// Create a new product
export async function createProduct(data: {
  name: string;
  amount: number;
  comment?: string;
}): Promise<Product> {
  const res = await fetch("/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create product");
  return res.json();
}

// Update an existing product
export async function updateProduct(
  id: string,
  data: Partial<Product>
): Promise<Product> {
  const res = await fetch(`/api/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update product");
  return res.json();
}

// Delete a product
export async function deleteProduct(id: string) {
  const res = await fetch(`/api/products/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete product");
  return res.json();
}

// Reorder products (persistent)
export async function reorderProducts(ids: string[]) {
  const res = await fetch("/api/products/reorder", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderedIds: ids }),
  });

  if (!res.ok) throw new Error("Failed to update product order");
  return res.json();
}
