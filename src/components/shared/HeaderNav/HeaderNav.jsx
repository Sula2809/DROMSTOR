"use client";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export const HeaderNav = () => {
  const { categoryData, isLoading: isCategoryLoading } =
    useGetAllCategoriesStore();
  const locale = useLocale();
  const router = useRouter();

  if (!categoryData) {
    return <div className={`bg-button-hover h-16 w-full`}></div>;
  }

  return (
    <div className={`w-full bg-foreground flex justify-center`}>
      {isCategoryLoading ? (
        <div className="flex justify-center items-center bg-button-hover h-16 w-full"></div>
      ) : (
        <ul className={`flex container justify-between`}>
          {/*{categoryData?.results?.slice(0, 6).map((category, index) => (*/}
          {/*  <li*/}
          {/*    key={category.id}*/}
          {/*    onClick={() => router.push(`/catalog/${category.name}`)}*/}
          {/*    className={`hover:bg-background_section w-full text-center text-white font-normal hover:text-button cursor-pointer ${index >= 3 ? "hidden md:block" : ""}`}*/}
          {/*  >*/}
          {/*    {category.name}*/}
          {/*  </li>*/}
          {/*))}*/}
          <li
            className={`text-white`}
            onClick={() => router.push("/catalog/Мозаика")}
          >
            category
          </li>
          <li
            className={`text-white`}
            onClick={() => router.push("/catalog/Мозаика")}
          >
            category
          </li>
          <li
            className={`text-white`}
            onClick={() => router.push("/catalog/Мозаика")}
          >
            category
          </li>
        </ul>
      )}
    </div>
  );
};
