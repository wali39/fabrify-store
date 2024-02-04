"use client";
import { cn } from "@/lib/utils";
import { Image as ImageTyp } from "@/types";
import { Tab } from "@headlessui/react";
import Image from "next/image";
interface GalleryTabProps {
  image: ImageTyp;
}
const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative aspect-square flex justify-center items-center cursor-pointer rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md ">
            <Image
              src={image.url}
              fill
              alt="product image tab"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
