"use client";
import { Image as ImageTyp } from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./gallery-tab";
import Image from "next/image";

interface GalleryProps {
  images: ImageTyp[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mt-6 w-full hidden lg:max-w-lg md:max-w-sm sm:max-w-xs sm:block  mx-auto">
        <Tab.List className="grid grid-cols-4  lg:grid-cols-4 gap-4 ">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square  w-full md:max-w-sm lg:max-w-lg sm:max-w-xs mx-auto">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                fill
                alt="gallery"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Gallery;
