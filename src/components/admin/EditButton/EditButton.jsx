"use client";
import { EditIconWhite } from "@/components/admin/icons/EditIconWhite";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const EditButton = ({ link, value }) => {
  const router = useRouter();
  return (
    <Button
      className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
      onClick={() => {
        router.push(`/admin/home${link}`);
        localStorage.setItem("categoryEdit", value);
      }}
    >
      <EditIconWhite /> Изменить
    </Button>
  );
};
