import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { cn } from "@/lib/utils";

export default function ProductListLayout({
  items,
  setItems,
  onReorder,
  children,
}: {
  items: any[];
  setItems: (items: any[]) => void;
  onReorder?: (ids: string[]) => void;
  children: React.ReactNode;
}) {
  const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((p) => p._id === active.id);
    const newIndex = items.findIndex((p) => p._id === over.id);
    const newOrder = arrayMove(items, oldIndex, newIndex);

    setItems(newOrder);

    // Persist to DB if callback exists
    if (onReorder) {
      await onReorder(newOrder.map((p) => p._id));
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={items.map((p) => p._id!)} strategy={verticalListSortingStrategy}>
        <div className={cn("space-y-3 mt-4")}>{children}</div>
      </SortableContext>
    </DndContext>
  );
}
