"use client";
import React, { useEffect, useState } from "react";
import { FavoriteIcon } from "@/components/shared/Icons/FavoriteIcon";
import { cn } from "@/lib/utils";

const FavoriteButton = ({ item, classname }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn(
        `absolute border border-black top-4 right-2 max-w-[60px] max-h-[34px] bg-white rounded-2xl flex justify-center items-center size-full cursor-pointer hover:bg-button duration-300 active:scale-[0.9]`,
        classname,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item ? (
        <FavoriteIcon
          isStroke={true}
          stroke={isHovered ? "white" : "red"}
          fill={isHovered ? "none" : "red"}
          isFill={true}
        />
      ) : (
        <FavoriteIcon stroke={isHovered ? "white" : "black"} />
      )}
    </span>
  );
};

export default FavoriteButton;
