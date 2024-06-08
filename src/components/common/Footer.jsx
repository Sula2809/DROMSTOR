"use client";
import { useEffect } from "react";
import Image from "next/image";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  const {
    fetchCategories,
    categoryData,
    isLoading: isCategoryLoading,
  } = useGetAllCategoriesStore();
  const {
    fetchSubCategories,
    subCategoryData,
    isLoading: isSubCategoryLoading,
  } = useGetSubCategoriesStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchCategories();
        await fetchSubCategories();
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData().catch((error) =>
      console.error("Failed to execute fetchData", error),
    );
  }, [fetchCategories, fetchSubCategories]);

  return (
    <footer className={`border-t-border_brown border-b-border_brown border`}>
      <div className={`container p-2 md:p-8`}>
        <div className="max-w-[266px]">
          <Image
            src="/mainLogo.svg"
            alt="logo2"
            width={166}
            height={88}
            //layout="responsive"
          />
        </div>
        <div className="flex gap-10 mt-12 text-button">
          <div className="flex gap-5 justify-between sm:flex-col">
            <div className="space-y-5">
              <h3 className="text-body3 md:text-body1 font-bold text-button">
                Компания
              </h3>
              <ul className="space-y-2.5">
                <li className="text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                  O нас
                </li>
                <li className="text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                  Контакты
                </li>
              </ul>
            </div>

            <div className="space-y-5 max-w-[264px] w-full">
              <h3 className="text-body3 md:text-body1 font-bold text-button">
                Категории
              </h3>
              <ul className="space-y-2.5">
                {isCategoryLoading ? (
                  <Oval visible={true} height="80" width="80" color="#5D5146" />
                ) : (
                  categoryData?.results?.map((item, index) => (
                    <li
                      key={index}
                      className={
                        "text-body3 md:text-body1 hover:text-border_brown cursor-pointer"
                      }
                      onClick={() => router.push(`/catalog/${item.name}`)}
                    >
                      {item.name}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
          <div className="sm:grid hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {isSubCategoryLoading ? (
              <Oval visible={true} height="80" width="80" color="#5D5146" />
            ) : (
              subCategoryData?.results?.map((item, index) => (
                <div className="space-y-5" key={index}>
                  <h3 className="text-body1 font-bold text-button">
                    {item.name}
                  </h3>
                  <ul className="space-y-2.5">
                    <li className="text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                      Подкатегория {index}
                    </li>
                    <li className="text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                      Подкатегория {index}
                    </li>
                    <li className="text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                      Подкатегория {index}
                    </li>
                    <li className="text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                      Подкатегория {index}
                    </li>
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-border_brown my-20"></div>
    </footer>
  );
};
