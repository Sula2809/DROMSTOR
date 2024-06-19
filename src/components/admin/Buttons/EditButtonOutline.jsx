"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EditIconWhite } from "@/components/admin/icons/EditIconWhite";

export const EditButtonOutline = ({
  children,
  link,
  material,
  productID,
  productName,
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    localStorage.setItem("buttonAction", "edit");
    if (material) {
      localStorage.setItem("editMaterial", material); // Updated key to "editMaterial"
    }
    if (productID) {
      localStorage.setItem("productID", productID);
    }
    if (productName) {
      localStorage.setItem("productName", productName);
    }
    router.push(`/admin/home/${link}/add&edit`);
  };

  return (
    <Button
      className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
      onClick={handleButtonClick}
    >
      <EditIconWhite /> <p className={`hidden sm:flex`}>{children}</p>
    </Button>
  );
};
