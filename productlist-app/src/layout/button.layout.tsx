import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "danger";
  size?: "sm" | "md";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
  }[size];

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300",
    outline:
      "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
    danger:
      "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300",
  }[variant];

  return (
    <button
      className={`rounded-md font-medium transition-colors duration-200 focus:outline-none ${sizes} ${variants} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
