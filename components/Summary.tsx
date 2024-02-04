"use client";

import useCart from "@/hooks/use-cart";
import Currency from "./ui/currency";
import axios from "axios";

const Summary = () => {
  const cartItems = useCart((state) => state.items);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PBULIC_API_URL}/chekout`,
      {
        productIds: cartItems.map((item) => item.id),
      }
    );
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
