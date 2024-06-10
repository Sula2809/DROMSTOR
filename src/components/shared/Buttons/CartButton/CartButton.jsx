"use client";
import React, { useState } from "react";
import { BugIcon } from "@/components/shared/Icons/BugIcon";

export const CartButton = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`absolute border border-black top-14 right-2 max-w-[60px] max-h-[34px] bg-white rounded-2xl flex justify-center items-center size-full cursor-pointer hover:bg-button duration-300 active:scale-[0.9]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {item ? (
        <BugIcon
          isStroke={true}
          stroke={isHovered ? "white" : "#5D5146"}
          fill={isHovered ? "none" : "#5D5146"}
          isFill={true}
          isInCart={!isHovered}
        />
      ) : (
        <BugIcon stroke={isHovered ? "white" : "black"} />
      )}
    </span>
  );
};
