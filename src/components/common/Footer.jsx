"use client";
import { useEffect } from "react";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import useGetSubSubCategoriesStore from "@/shared/services/store/SubSubCategories.store";
import { Oval } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export const Footer = () => {
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("Footer");
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

  const {
    fetchSubSubCategories,
    subSubCategoryData,
    isLoadingSubSub,
    errorsSubSub,
  } = useGetSubSubCategoriesStore();

  const categoryCatalog = (name, id) => {
    router.push(`/catalog/${name}`);
    localStorage.setItem("filter", id);
  };
  const subcategoryCatalog = (name, id) => {
    router.push(`/catalog/${name}`);
    localStorage.setItem("filter", id);
  };
  const subsubcategoryCatalog = (name, id) => {
    router.push(`/catalog/${name}`);
    localStorage.setItem("filter", id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchCategories();
        await fetchSubCategories();
        await fetchSubSubCategories();
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData().catch((error) =>
      console.error("Failed to execute fetchData", error),
    );
  }, [fetchCategories, fetchSubCategories, fetchSubSubCategories]);

  useEffect(() => {
    console.log("cat", categoryData);
    console.log("sub", subCategoryData);
    console.log("subsub", subSubCategoryData);
  }, [categoryData, subCategoryData, subSubCategoryData]);

  return (
    <footer className={`border-t-border_brown border-b-border_brown border`}>
      <div className={`container p-2 md:p-8`}>
        <div className="max-w-[266px]">
          <img src="/mainLogo.svg" alt="logo2" />
        </div>
        <div className="flex gap-10 mt-12 text-button">
          <div className="flex gap-5 justify-start sm:flex-col max-w-[350px] w-full">
            <div className="space-y-5">
              <h3 className="text-body3 md:text-body1 font-bold text-button">
                {t("company.title")}
              </h3>
              <ul className="space-y-2.5">
                <li className="text-body3 md:text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                  {t("company.aboutUs")}
                </li>
                <li className="text-body3 md:text-body1 font-normal text-button hover:text-border_brown cursor-pointer">
                  {t("company.contacts")}
                </li>
              </ul>
            </div>

            <div className="space-y-5 max-w-[264px] w-full">
              <h3 className="text-body3 md:text-body1 font-bold text-button">
                {t("categories")}
              </h3>
              <ul className="space-y-2.5">
                {isCategoryLoading ? (
                  <Oval visible={true} height="80" width="80" color="#5D5146" />
                ) : (
                  categoryData?.map((item, index) => (
                    <li
                      key={index}
                      className={
                        "text-body3 md:text-body1 hover:text-border_brown cursor-pointer"
                      }
                      onClick={() =>
                        categoryCatalog(
                          locale === "ru" ? item.name : item.name_en,
                          item.id,
                        )
                      }
                    >
                      {locale === "ru" ? item.name : item.name_en}
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
              subCategoryData?.map((subCat, index) => (
                <div className="space-y-5" key={index}>
                  <h3
                    className="text-body1 font-bold text-button hover:text-border_brown cursor-pointer duration-300"
                    onClick={() =>
                      subcategoryCatalog(
                        locale === "ru" ? subCat.name : subCat.name_en,
                        subCat.id,
                      )
                    }
                  >
                    {locale === "ru" ? subCat.name : subCat.name_en}
                  </h3>
                  <ul className="space-y-2.5">
                    {subCat?.subsubcategories?.length > 0 ? (
                      subCat.subsubcategories.map((subSubCat, index) => (
                        <li
                          key={index}
                          className="text-body1 font-normal text-button hover:text-border_brown cursor-pointer"
                          onClick={() =>
                            subsubcategoryCatalog(
                              locale === "ru"
                                ? subSubCat.name
                                : subSubCat.name_en,
                              subSubCat.id,
                            )
                          }
                        >
                          {locale === "ru" ? subSubCat.name : subSubCat.name_en}
                          2
                        </li>
                      ))
                    ) : (
                      <p className={`text-body1`}>Пусто</p>
                    )}
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
