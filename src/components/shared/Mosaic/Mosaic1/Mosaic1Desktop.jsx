"use client";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import { cn } from "@/lib/utils";
import useGetSubCategoriesStore from "@/shared/services/store/SubCategories.store";
import { useRouter } from "next/navigation";

export const Mosaic1Desktop = ({ classname, id }) => {
  const { subCategoryData } = useGetSubCategoriesStore();
  const router = useRouter();

  const handleNewProduct = (id, catalogName) => {
    router.push(`/catalog/${catalogName}`);
  };

  if (!subCategoryData || !Array.isArray(subCategoryData)) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cn(`grid-cols-12 gap-4 h-[820px]`, classname)}>
      <div className={`col-span-4 grid grid-rows-3 gap-4`}>
        {subCategoryData[0]?.category === id && (
          <div
            className="bg-cover bg-center relative"
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
        {subCategoryData[2]?.category === id && (
          <div
            className="bg-cover bg-center relative"
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
      </div>
      <div className={`col-span-2 grid grid-rows-3 gap-4`}>
        {subCategoryData[3]?.category === id && (
          <div
            className="bg-cover bg-center relative"
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
        {subCategoryData[4]?.category === id && (
          <div
            className="bg-cover bg-center relative"
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
      </div>
      <div className={`col-span-6 grid grid-rows-3 gap-4`}>
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
        <div className="grid grid-cols-2 gap-4">
          {subCategoryData[7]?.category === id && (
            <div
              className="bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${subCategoryData[7]?.image || "/no-image.png"})`,
              }}
            >
              <TextOnHover
                item={subCategoryData[7]}
                handleProduct={handleNewProduct}
              />
            </div>
          )}
          {subCategoryData[8]?.category === id && (
            <div
              className="bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${subCategoryData[8]?.image || "/no-image.png"})`,
              }}
            >
              <TextOnHover
                item={subCategoryData[8]}
                handleProduct={handleNewProduct}
              />
            </div>
          )}
        </div>
        {subCategoryData[9]?.category === id && (
          <div
            className="bg-cover bg-center relative"
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
      </div>
    </div>
  );
};
