import React from "react";

interface ProductCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ProductCard({ children, className }: ProductCardProps) {
  return (
    <div
      className={`w-full rounded-lg bg-white border border-gray-200 shadow-sm 
                  p-4 sm:p-5 md:p-6 transition-transform duration-200 
                  hover:shadow-md ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
