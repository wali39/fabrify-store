"use client";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import Filter from "./filter";

interface MobileFilterProps {
  sizes: Size[];
  colors: Color[];
}
const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <button
        onClick={onOpen}
        className="bg-black hover:bg-gray-600 text-white  px-3 py-3 rounded-xl  flex gap-2 lg:hidden"
      >
        Filter <Plus />
      </button>
      <Dialog open={open} onClose={onClose} className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 z-40 flex ">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col bg-white overflow-y-auto shadow-xl pb-6 ">
            <div className="flex items-center justify-end px-4 py-3">
              <IconButton icon={<X />} onClick={onClose} />
            </div>
            <div className="mx-4">
              <Filter name="Sizes" data={sizes} valueKey="sizeId" />
              <Filter name="Colors" data={colors} valueKey="colorId" />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
