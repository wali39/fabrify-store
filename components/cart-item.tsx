"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./ui/icon-button";
import { X } from "lucide-react";
import useCart from "@/hooks/use-cart";
import Currency from "./ui/currency";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image fill src={data.images[0].url} alt="" />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => cart.removeItem(data.id)}
            className="object-cover object-center"
            icon={<X size={15} />}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:ml-6">
          <div className="flex justify-between">
            <p className="text-lg font-semibold to-black">{data.name}</p>
          </div>
          <div className="flex ">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
          {/* whsec_c4e07b4844e01d81cdde1d3920dd86ec39e76344e4b810de6ea1baa5a6d96c5 */}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
