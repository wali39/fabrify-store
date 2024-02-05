"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Currency from "../../../../components/ui/currency";

const Summary = () => {
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAll);
  const cartItems = useCart((state) => state.items);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [removeAll, searchParams]);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      { productIds: cartItems.map((item) => item.id) }
    );
    console.log(response);
    window.location = response.data.url;
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-200 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex justify-between border-t-2 border-gray-300 pt-4 ">
          <div>Order Total</div>
          <div>
            <Currency value={totalPrice} />
          </div>
        </div>
        <button
          onClick={onCheckout}
          className="bg-black text-white rounded-full w-full px-2 py-2 mt-6"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Summary;
