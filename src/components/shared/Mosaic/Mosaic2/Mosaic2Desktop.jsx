"use client";
import {TextOnHover} from "@/components/shared/TextOnHover/TextOnHover";
import {cn} from "@/lib/utils";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";
import {useRouter} from "next/navigation";

export const Mosaic2Desktop = ({classname, id}) => {
    const {subCategoryData} = useGetSubCategoriesStore();
    const router = useRouter();

    const handleNewProduct = (id, catalogName) => {
        router.push(`/catalog/${catalogName}    `);
    };

    if (!subCategoryData || !Array.isArray(subCategoryData)) {
        return <div>Loading...</div>;
    }

    return (
        <div className={cn(`grid-cols-12 gap-5 mt-7 h-[830px]`, classname)}>
            <div className="col-span-4 grid grid-rows-2 gap-5">
                {subCategoryData[0]?.category === id && (
                    <div
                        className="bg-cover bg-center relative size-full"
                        style={{
                            backgroundImage: `url(${subCategoryData[0]?.image || "/no-image.png"})`,
                        }}
                    >
                        <TextOnHover
                            item={subCategoryData[0]}
                            handleProduct={handleNewProduct}
                        />
                    </div>
                )}
                {subCategoryData[1]?.category === id && (
                    <div
                        className="bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url(${subCategoryData[1]?.image || "/no-image.png"})`,
                        }}
                    >
                        <TextOnHover
                            item={subCategoryData[1]}
                            handleProduct={handleNewProduct}
                        />
                    </div>
                )}
            </div>
            <div className="col-span-2 grid grid-rows-2 gap-5">
                {subCategoryData[2]?.category === id && (
                    <div
                        className="row-span-1 bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url(${subCategoryData[2]?.image || "/no-image.png"})`,
                        }}
                    >
                        <TextOnHover
                            item={subCategoryData[2]}
                            handleProduct={handleNewProduct}
                        />
                    </div>
                )}
                {subCategoryData[3]?.category === id && (
                    <div
                        className="row-span-1 bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url(${subCategoryData[3]?.image || "/no-image.png"})`,
                        }}
                    >
                        <TextOnHover
                            item={subCategoryData[3]}
                            handleProduct={handleNewProduct}
                        />
                    </div>
                )}
            </div>
            <div className="col-span-6 grid grid-rows-2 gap-5">
                {subCategoryData[4]?.category === id && (
                    <div
                        className="row-span-1 bg-cover bg-center relative"
                        style={{
                            backgroundImage: `url(${subCategoryData[4]?.image || "/no-image.png"})`,
                        }}
                    >
                        <TextOnHover
                            item={subCategoryData[4]}
                            handleProduct={handleNewProduct}
                        />
                    </div>
                )}
                <div className="grid grid-cols-2 gap-5">
                    {subCategoryData[5]?.category === id && (
                        <div
                            className="bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(${subCategoryData[5]?.image || "/no-image.png"})`,
                            }}
                        >
                            <TextOnHover
                                item={subCategoryData[5]}
                                handleProduct={handleNewProduct}
                            />
                        </div>
                    )}
                    {subCategoryData[6]?.category === id && (
                        <div
                            className="bg-cover bg-center relative"
                            style={{
                                backgroundImage: `url(${subCategoryData[6]?.image || "/no-image.png"})`,
                            }}
                        >
                            <TextOnHover
                                item={subCategoryData[6]}
                                handleProduct={handleNewProduct}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
