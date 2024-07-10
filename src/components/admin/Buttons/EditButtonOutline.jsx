"use client";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";
import {EditIconWhite} from "@/components/admin/icons/EditIconWhite";

export const EditButtonOutline = ({
                                      children,
                                      link,
                                      img,
                                      productID,
                                      categoryID,
                                      images,
                                      subcategoryID, subsubcategoryID,
                                      name,
                                      name_en, descripiton, description_en, price, colors, materials,
                                  }) => {
    const router = useRouter();
    const handleButtonClick = () => {

        localStorage.removeItem("buttonAction");
        localStorage.removeItem("img");
        localStorage.removeItem("productID");
        localStorage.removeItem("name");
        localStorage.removeItem("name_en");
        localStorage.removeItem("categoryID");
        localStorage.removeItem("descripiton");
        localStorage.removeItem("description_en");
        localStorage.removeItem("price");
        localStorage.removeItem("colors");
        localStorage.removeItem("subcategoryID");
        localStorage.removeItem("subsubcategoryID");
        localStorage.removeItem('images')

        localStorage.setItem("buttonAction", "edit");
        if (img) {
            localStorage.setItem("img", img);
        }
        if (images) {
            localStorage.setItem("images", JSON.stringify(images));
        }
        if (productID) {
            localStorage.setItem("productID", productID);
        }
        if (categoryID) {
            console.log("categoryID", categoryID)
            localStorage.setItem("categoryID", categoryID);
        }
        if (subcategoryID) {
            console.log("subcategoryID", subcategoryID)
            localStorage.setItem("subcategoryID", subcategoryID);
        }
        if (subsubcategoryID) {
            console.log("subsubcategoryID", subsubcategoryID)
            localStorage.setItem("subsubsubcategoryID", subsubcategoryID);
        }
        if (name) {
            localStorage.setItem("name", name);
        }
        if (name_en) {
            localStorage.setItem("name_en", name_en);
        }
        if (descripiton) {
            localStorage.setItem("description", descripiton);
        }
        if (description_en) {
            localStorage.setItem("description_en", description_en);
        }
        if (price) {
            localStorage.setItem("price", price);
        }
        if (colors) {
            localStorage.setItem("colors", colors);
        }
        if (materials) {
            localStorage.setItem("materials", materials);
        }
        router.push(`/admin/home/${link}/add&edit`);
    };

    return (
        <Button
            className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
            onClick={handleButtonClick}
        >
            <EditIconWhite/> <p className={`hidden sm:flex`}>{children}</p>
        </Button>
    );
};
