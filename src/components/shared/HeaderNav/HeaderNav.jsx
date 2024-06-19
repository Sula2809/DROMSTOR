"use client";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      {/*<ul className={`flex container justify-between`}>*/}
      {/*  {categoryData?.results?.map((category, index) => (*/}
      {/*    <li*/}
      {/*      key={category.id}*/}
      {/*      onClick={() => router.push(`/catalog/${category.name}`)}*/}
      {/*      className={`hover:bg-background_section w-full text-center text-white font-normal whitespace-nowrap px-4 hover:text-button cursor-pointer ${index >= 3 ? "hidden md:block" : ""}`}*/}
      {/*    >*/}
      {/*      {category.name}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      <Carousel className="w-4/5">
        <CarouselContent className="-ml-1 gap-0">
          {categoryData?.results?.map((category, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/6 justify-center p-0 flex"
            >
              <div
                className=" text-white whitespace-nowrap truncate w-full cursor-pointer text-center hover:bg-background hover:text-black_text p-0"
                onClick={() => router.push(`/catalog/${category.name}`)}
              >
                {category.name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`rounded-none bg-inherit border-none`}
          isBlack={false}
        />
        <CarouselNext
          className={`rounded-none bg-inherit border-none`}
          isBlack={false}
        />
      </Carousel>
    </div>
  );
};
