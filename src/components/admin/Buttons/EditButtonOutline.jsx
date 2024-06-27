"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { EditIconWhite } from "@/components/admin/icons/EditIconWhite";
import { useAuth } from "@/shared/Providers/AuthProvider";

export const EditButtonOutline = ({
  children,
  link,
  img,
  productID,
  name,
  name_en,
}) => {
  const router = useRouter();
  const { token } = useAuth();
  const handleButtonClick = () => {
    console.log("token", token);

    localStorage.removeItem("buttonAction");
    localStorage.removeItem("img");
    localStorage.removeItem("productID");
    localStorage.removeItem("name");
    localStorage.removeItem("name_en");
    // localStorage.removeItem("buttonAction");

    localStorage.setItem("buttonAction", "edit");
    if (img) {
      console.log(img);
      localStorage.setItem("img", img);
    }
    if (productID) {
      console.log(productID);
      localStorage.setItem("productID", productID);
    }
    if (name) {
      console.log(name);
      localStorage.setItem("name", name);
    }
    if (name_en) {
      console.log(name_en);
      localStorage.setItem("name_en", name_en);
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
