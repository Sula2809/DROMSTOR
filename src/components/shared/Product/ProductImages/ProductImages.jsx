"use client";
import { useEffect, useState } from "react";

export const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].image);

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0].image);
    }
  }, [images]);

  return (
    <div className="ProductImages w-full flex flex-col gap-1 md:gap-3">
      <div className="relative max-w-[400] md:max-w-[748px] max-h-[400px] md:max-h-[820px]">
        <img
          src={selectedImage}
          alt={selectedImage}
          className="object-cover w-full h-full aspect-[1/1]"
        />
      </div>
      <div className={`flex justify-center md:gap-3`}>
        {images.map((item) => (
          <div
            key={item.id}
            className={`max-w-[65px] md:max-w-[130px] max-h-[65px] md:max-h-[155px] cursor-pointer`}
            onClick={() => {
              setSelectedImage(item.image);
            }}
          >
            <img
              src={item.image}
              alt={"image"}
              className="object-cover w-full h-full aspect-[1/1]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
