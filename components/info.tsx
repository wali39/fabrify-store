"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
  product: Product;
}
const Info: React.FC<InfoProps> = ({ product }) => {
  const cart = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
      {/* <div className="mt-3 flex items-end justify-between"> */}
      <p className="text-xl text-gray-900 mt-3">
        <Currency value={product?.price} />
      </p>
      {/* </div> */}
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{product?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="w-[20px] h-[20px] rounded-full "
            style={{ backgroundColor: product?.color?.value }}
          ></div>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => cart.addItem(product)}
            className="bg-black hover:bg-gray-600 text-white fontbol px-4 py-4 rounded-full flex gap-2 "
          >
            <ShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
