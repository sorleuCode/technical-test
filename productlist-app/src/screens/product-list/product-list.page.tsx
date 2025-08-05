"use client";
import { useEffect, useState } from "react";
import { Product } from "@/types/product.type";
import ProductForm from "./product-form";
import ProductItem from "./product-item";
import Button from "@/layout/button.layout";
import PageContainer from "@/layout/page-container.layout";
import ProductListLayout from "@/layout/product-list.layout";
import Heading from "@/layout/heading.layout";
import Text from "@/layout/text.layout";
import Stack from "@/layout/stack.layout";
import Flex from "@/layout/flex.layout";
import { fetchProducts, deleteProduct, updateProduct, reorderProducts } from "@/service/product.service";
import { logout } from "@/service/auth.service";

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    const data = await fetchProducts();
    setProducts(data.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)));
    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p._id !== id));
  };

  const handleUpdate = async (id: string, data: Partial<Product>) => {
    const updated = await updateProduct(id, data);
    setProducts((prev) => prev.map((p) => (p._id === id ? updated : p)));
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = products.findIndex((p) => p._id === active.id);
    const newIndex = products.findIndex((p) => p._id === over.id);

    const newOrder = arrayMove(products, oldIndex, newIndex);
    setProducts(newOrder);

    // Persist to DB
    await reorderProducts(newOrder.map((p) => p._id!));
  };

  return (
    <PageContainer className="items-start pt-0">
      <div className="w-full max-w-4xl mx-auto">

        {/* Sticky Header */}
        <div className="sticky top-0 bg-white z-10 shadow-md px-4 py-4 mb-8 flex justify-between items-center">
          <Heading level={2}>My Product List</Heading>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        {/* Stack for content */}
        <Stack gap="8">
          <ProductForm onProductAdded={loadProducts} />

          {loading ? (
            <Text align="center">Loading...</Text>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={products.map((p) => p._id!)}
                strategy={verticalListSortingStrategy}
              >
                <ProductListLayout items={products} setItems={setProducts}>
                  {products.map((product) => (
                    <ProductItem
                      key={product._id}
                      product={product}
                      onDelete={handleDelete}
                      onUpdate={handleUpdate}
                    />
                  ))}
                </ProductListLayout>
              </SortableContext>
            </DndContext>
          )}
        </Stack>
      </div>
    </PageContainer>
  );
}
