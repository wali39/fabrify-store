"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavbarAction = () => {
  const [isMount, setIsMount] = useState(false);
  const router=useRouter();
  const cart = useCart();
  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) return null;
const handleClick=()=>{
  router.push("/cart")
}
  return (
    <div className="ml-auto flex items-center gap-x-4 relative">
      <button onClick={handleClick} className=" text-dark font-bold py-2 px-4 rounded-full flex ">
        <ShoppingBag size={20} />
        <span className=" text-xs bg-gray-600 text-white absolute top-0 -right-1 w-[20px] py-0.5 rounded-full items-center flex justify-center">
          {cart.items.length}
        </span>
      </button>
    </div>
  );
};

export default NavbarAction;
