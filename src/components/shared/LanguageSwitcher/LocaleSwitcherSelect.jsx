"use client";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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
    startTransition(() => {
      router.replace({ pathname, params }, { locale: event });
    });
  }

  return (
    <Select onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger className="w-full border-none max-w-[40px] p-0">
        <SelectValue placeholder={earth}>{earth}</SelectValue>
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
