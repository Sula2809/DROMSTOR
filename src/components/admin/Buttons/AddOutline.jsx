"use client";
import { Button } from "@/components/ui/button";
import { AddIconWhite } from "@/components/admin/icons/AddIconWhite";
import { useRouter } from "next/navigation";

export const AddOutline = ({ link }) => {
  const router = useRouter();
  return (
    <Button
      className={`bg-inherit hover:bg-inherit`}
      onClick={() => router.push(`/admin/home${link}`)}
    >
      <AddIconWhite />
    </Button>
  );
};
