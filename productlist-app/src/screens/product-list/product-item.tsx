"use client";
import { useState } from "react";
import { Product } from "@/types/product.type";
import Button from "@/layout/button.layout";
import ProductCard from "@/layout/product-card.layout";
import Input from "@/layout/input.layout";
import Text from "@/layout/text.layout";
import Flex from "@/layout/flex.layout";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function ProductItem({
  product,
  onDelete,
  onUpdate,
}: {
  product: Product;
  onDelete: (id: string) => void;
  onUpdate: (id: string, data: Partial<Product>) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draftName, setDraftName] = useState(product.name);
  const [draftAmount, setDraftAmount] = useState(product.amount);
  const [draftComment, setDraftComment] = useState(product.comment ?? "");

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: product._id! });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const handleSave = () => {
    onUpdate(product._id!, { name: draftName, amount: draftAmount, comment: draftComment });
    setEditing(false);
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes}>
      <ProductCard className="transition-transform duration-200">
        {editing ? (
          <Flex direction="col" gap="2">
            <Input
              value={draftName}
              onChange={(e) => setDraftName(e.target.value)}
              placeholder="Name"
            />
            <Input
              type="number"
              value={draftAmount}
              onChange={(e) => setDraftAmount(Number(e.target.value))}
              placeholder="Amount"
              
            />
            <Input
              value={draftComment}
              onChange={(e) => setDraftComment(e.target.value)}
              placeholder="Comment"
            />
            <Flex gap="2">
              <Button onClick={handleSave} size="sm">Save</Button>
              <Button onClick={() => setEditing(false)} size="sm" variant="outline">Cancel</Button>
            </Flex>
          </Flex>
        ) : (
          <Flex direction="row" justify="between" align="center" gap="4">
            <div {...listeners} className="flex-1 cursor-grab select-none">
              <Text size="lg" className="text-gray-900 font-semibold">{product.name}</Text>
              <Text size="sm" className="text-gray-700">Amount: {product.amount}</Text>
              {product.comment && (
                <Text size="sm" className="text-gray-700">{product.comment}</Text>
              )}
            </div>
            <Flex gap="2">
              <Button size="sm" onClick={() => {
                setDraftName(product.name);
                setDraftAmount(product.amount);
                setDraftComment(product.comment ?? "");
                setEditing(true);
              }}>
                Edit
              </Button>
              <Button size="sm" variant="danger" onClick={() => onDelete(product._id!)}>
                Delete
              </Button>
            </Flex>
          </Flex>
        )}
      </ProductCard>
    </div>
  );
}
