"use client";
import { cn } from "@/lib/utils";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";

export const Mosaic2Mobile = ({ classname }) => {
  const { subCategoryData } = useGetSubCategoriesStore();

  if (
    !subCategoryData ||
    !Array.isArray(subCategoryData) ||
    subCategoryData.length === 0
  ) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cn("grid-cols-6 grid-rows-12 gap-1 h-[733px]", classname)}>
      <div className="col-span-4 row-span-2 row-start-1 row-end-4">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: `url(${subCategoryData[0]?.image || "/no-image.png"})`,
          }}
        >
          <TextOnHover isMobile={true} item={subCategoryData[0]} />
        </div>
      </div>
      <div className="col-start-5 col-span-2 row-span-2">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: `url(${subCategoryData[1]?.image || "/no-image.png"})`,
          }}
        >
          <TextOnHover isMobile={true} item={subCategoryData[1]} />
        </div>
      </div>
      <div className="col-span-4 row-start-4 row-span-2">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: `url(${subCategoryData[2]?.image || "/no-image.png"})`,
          }}
        >
          <TextOnHover isMobile={true} item={subCategoryData[2]} />
        </div>
      </div>
      <div className="col-start-5 col-span-2 row-start-3 row-span-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: `url(${subCategoryData[3]?.image || "/no-image.png"})`,
          }}
        >
          <TextOnHover isMobile={true} item={subCategoryData[3]} />
        </div>
      </div>
      <div className="col-span-6 row-start-6 row-span-4">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: `url(${subCategoryData[4]?.image || "/no-image.png"})`,
          }}
        >
          <TextOnHover isMobile={true} item={subCategoryData[4]} />
        </div>
      </div>
      <div className="col-span-3 row-start-10 row-span-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: `url(${subCategoryData[5]?.image || "/no-image.png"})`,
          }}
        >
          <TextOnHover isMobile={true} item={subCategoryData[5]} />
        </div>
      </div>
      <div className="col-start-4 col-span-3 row-start-10 row-span-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: `url(${subCategoryData[6]?.image || "/no-image.png"})`,
          }}
        >
          <TextOnHover isMobile={true} item={subCategoryData[6]} />
        </div>
      </div>
    </div>
  );
};
