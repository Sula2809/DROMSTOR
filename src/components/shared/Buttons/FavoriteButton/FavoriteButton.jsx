"use client";
import React, { useEffect, useState } from "react";
import { FavoriteIcon } from "@/components/shared/Icons/FavoriteIcon";
import { cn } from "@/lib/utils";
import { AddFavoriteItem } from "@/shared/services/favorites/favorites";
import { error } from "next/dist/build/output/log";
import { useAuth } from "@/shared/Providers/AuthProvider";

const FavoriteButton = ({ item, classname }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { token } = useAuth();

  const handleAddToFavorite = () => {
    console.log("click");
    if (!token) {
      localStorage.setItem("message", "Для начала нужно войти в систему");
      const event = new Event("showLogin");
      window.dispatchEvent(event);
    } else {
      const addFavorite = async (id = item.id) => {
        const response = await AddFavoriteItem(token, id);
        if (response) {
          console.log("added");
        } else {
          error();
        }
      };
      addFavorite();
    }
  };

  useEffect(() => {
    console.log("item: ", item);
  }, []);

  return (
    <span
      className={cn(
        `border border-black top-4 right-2 max-w-[60px] max-h-[34px] rounded-2xl flex justify-center items-center size-full cursor-pointer hover:bg-button duration-300 active:scale-[0.9] bg-white`,
        classname,
      )}
      onClick={handleAddToFavorite}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*{item.is_in_favorite ? (*/}
      {/*  <FavoriteIcon isStroke={true} stroke="red" fill="red" isFill={true} />*/}
      {/*) : (*/}
      {/*  <FavoriteIcon stroke={isHovered ? "white" : "black"} />*/}
      {/*)}*/}
      <FavoriteIcon isStroke={true} stroke="red" fill="red" isFill={true} />
    </span>
  );
};

export default FavoriteButton;
