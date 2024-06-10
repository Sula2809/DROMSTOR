"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackToOrder = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.back()}
      className={`lg:hidden flex items-center gap-1 text-body-3 md:text-h4 font-bold text-button`}
    >
      <ArrowLeft className={`size-5`} />
      Оформление заказа
    </div>
  );
};
