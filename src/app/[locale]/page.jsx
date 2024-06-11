"use client";
import { Swiper } from "@/components/shared/Swiper/Swiper";
import { Mosaic2 } from "@/components/shared/Mosaic/Mosaic2/Mosaic2";
import { Mosaic1 } from "@/components/shared/Mosaic/Mosaic1/Mosaic1";
import { Recommendations } from "@/components/shared/Recomendations/Recomendations";
import { DecorativeWallPans } from "@/components/shared/DecorativeWallPans/DecorativeWallPans";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";

export default function IndexPage({ params: { locale } }) {
  const { categoryData } = useGetAllCategoriesStore();

  return (
    <main>
      <Swiper />
      {categoryData?.results?.map((category, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <Mosaic2 title={category.name} />
          ) : (
            <Mosaic1 title={category.name} />
          )}
          {index % 2 === 0 ? <Recommendations /> : <DecorativeWallPans />}
        </div>
      ))}
    </main>
  );
}
