"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { locales } from "@/config";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EarthIcon } from "@/components/shared/Icons/EarthIcon";

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const earth = <EarthIcon />;

  function onSelectChange(event) {
    console.log(params);
    // const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: event },
      );
    });
  }

  return (
    <Select onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger className="w-full border-none max-w-[40px] p-0">
        <SelectValue placeholder={earth}>
          {earth} {/* Переместите иконку сюда */}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="ru">Русский</SelectItem>
          <SelectItem value="en">English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
