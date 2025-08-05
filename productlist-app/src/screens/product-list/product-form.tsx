
import { useState } from "react";
import Button from "@/layout/button.layout";
import Input from "@/layout/input.layout";
import { createProduct } from "@/service/product.service";

export default function ProductForm({ onProductAdded }: { onProductAdded: () => void }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  const handleAdd = async () => {
    if (!name || !amount) return;
    await createProduct({ name, amount: Number(amount), comment });
    setName(""); setAmount(""); setComment("");
    onProductAdded();
  };

  return (
    <div className="flex gap-2 mb-4 flex-wrap sm:flex-nowrap">
      <Input
        placeholder="Product name"
        className="flex-1 min-w-[120px]"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Amount"
        type="number"
        className="w-24"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Input
        placeholder="Comment"
        className="flex-1 min-w-[120px]"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button className="w-full sm:w-auto" onClick={handleAdd}>Add</Button>
    </div>
  );
}
