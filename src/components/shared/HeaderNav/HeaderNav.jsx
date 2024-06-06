'use client'
import useGetAllCategoriesStore from "@/shared/services/store/AllCategories.store";
import {useLocale} from "next-intl";
import { Oval } from "react-loader-spinner";
import {useRouter} from "next/navigation";

export const HeaderNav = () => {
    const { categoryData, isLoading: isCategoryLoading } = useGetAllCategoriesStore();
    const locale = useLocale();
    const router = useRouter();

    return (
        <div className={`w-full bg-foreground flex justify-center`}>
            {isCategoryLoading ? (
                <div className="flex justify-center items-center">
                    <Oval
                        visible={true}
                        height="40"
                        width="40"
                        color="#5D5146"
                    />
                </div>
            ) : (
                <ul className={`flex justify-center items-center`}>
                    {categoryData?.results?.slice(0, 6).map((category) => (
                        <li
                            key={category.id}
                            onClick={() => router.replace(`/${locale}/catalog/${category.name}`)}
                            className={`px-5 hover:bg-background_section w-full text-center text-white font-normal text-lg hover:text-black cursor-pointer max-w-[600px]`}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
