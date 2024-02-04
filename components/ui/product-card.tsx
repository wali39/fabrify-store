"use client";

import { Product } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 py-4 "
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0].url}
          fill
          alt="product image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full bottom-5 px-6">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="py-2">
          <p className="text-lg font-semibold ">{data?.name}</p>
          <p className="text-sm text-gray-500">{data?.category.name}</p>
        </div>
        <div>
          <Currency value={data?.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
