"use client";
import { AddIconWhite } from "@/components/admin/icons/AddIconWhite";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const AddButton = ({ children, link }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    localStorage.setItem("buttonAction", "add");
    router.push(`/admin/home/${link}/add&edit`);
  };

  return (
    <Button
      className="flex items-center text-body3 rounded-full bg-admin-grey md:hover:bg-admin-grey-hover"
      onClick={handleButtonClick}
    >
      <AddIconWhite /> {children}
    </Button>
  );
};
