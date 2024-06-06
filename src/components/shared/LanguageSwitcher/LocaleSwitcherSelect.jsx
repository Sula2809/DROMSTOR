"use client";
import React, { useTransition } from "react";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useRouter, usePathname } from "@/navigation";
import { useParams } from "next/navigation";

export const LanguageSwitcher = () => {
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const router = useRouter();
  const selectValue = (
    <Image
      src="/icons/earth.svg"
      alt="switchLanguage"
      width={78}
      height={78}
      className="size-12 rounded-full p-1"
    />
  );

  const onLocaleChange = (e) => {
    console.log(e.target.value);
    router.replace({ pathname, params }, { locale: e.target.value });
  };

  return (
    <select
      value={locale}
      onChange={onLocaleChange}
      className="flex h-10 w-20 items-center justify-between rounded-md border border-input
      bg-background px-2 text-sm text-foreground ring-offset-background
      placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring
      focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
    >
      <option value="en">english</option>
      <option value="ru">russian</option>
    </select>
  );
};
