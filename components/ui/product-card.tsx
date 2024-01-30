"use client";

import { Product } from "@/types";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 py-4 ">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0].url}
          fill
          alt="product image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100" >dhflas</div>
      </div>
    </div>
  );
};

export default ProductCard;
