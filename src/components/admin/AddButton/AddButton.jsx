"use client";
import { AddIconWhite } from "@/components/admin/icons/AddIconWhite";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const AddButton = ({ children, link }) => {
  const router = useRouter();
  return (
    <Button
      className="flex items-center text-body3 rounded-full bg-admin-grey md:hover:bg-admin-grey-hover"
      onClick={() => router.push(`/admin/home${link}`)}
    >
      <AddIconWhite /> {children}
    </Button>
  );
};
