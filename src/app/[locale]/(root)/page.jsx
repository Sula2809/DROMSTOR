"use client";
import { Swiper } from "@/components/shared/Swiper/Swiper";
import { Mosaic2 } from "@/components/shared/Mosaic/Mosaic2/Mosaic2";
import { Mosaic1 } from "@/components/shared/Mosaic/Mosaic1/Mosaic1";
import { Popular } from "@/components/shared/Popular/Popular";
import { NewProducts } from "@/components/shared/NewProducts/NewProducts";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";

export default function IndexPage({ params: { locale } }) {
  const { categoryData } = useGetAllCategoriesStore();

  return (
    <main>
      <Swiper />
      {categoryData?.map((category, index) => (
        <div key={category.id}>
          {index % 2 === 0 &&
            category.subcategories &&
            category.subcategories.length > 0 && (
              <>
                <Mosaic2
                  title={locale === "ru" ? category.name : category.name_en}
                  id={category.id}
                />
                <Popular />
              </>
            )}
          {index % 2 !== 0 &&
            category.subcategories &&
            category.subcategories.length > 0 && (
              <>
                <Mosaic1
                  title={locale === "ru" ? category.name : category.name_en}
                  id={category.id}
                />
                <NewProducts />
              </>
            )}
        </div>
      ))}
    </main>
  );
}
