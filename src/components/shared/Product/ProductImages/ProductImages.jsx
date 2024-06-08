"use client";
import Image from "next/image";
import { useState } from "react";

export const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="ProductImages w-full space-y-3">
      <div className="relative w-[748px] h-[820px]">
        <img
          src={selectedImage}
          alt={selectedImage}
          className="object-fit size-full"
        />
      </div>
      <div className={`flex gap-3`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`max-w-[140px] max-h-[155px] cursor-pointer`}
            onClick={() => setSelectedImage(image)}
          >
            <img src={image} alt={image} className="object-fit size-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
