"use client";
import React from "react";
import { Empty } from "@/components/shared/Drawers/Empty/Empty";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { FavoritesContent } from "@/components/shared/FavoritesContent/FavoritesContent";
import { useTranslations } from "next-intl";

export default function Favorite() {
  const breadCrumbs = useTranslations("BreadCrumbs");
  const favoritesData = false;

  if (favoritesData) {
    return <Empty isCart={false} />;
  }

  const favoritesBreadCrumbs = [
    { name: breadCrumbs("home"), link: "/" },
    { name: breadCrumbs("favorites"), link: "/favorites" },
  ];

  return (
    <>
      <main className={`container px-2 sm:px-7 md:px-10 lg:px-20 py-2 md:py-5`}>
        <BreadCrumb
          items={favoritesBreadCrumbs}
          className={`hidden md:block`}
        />
        <FavoritesContent />
      </main>
    </>
  );
}
