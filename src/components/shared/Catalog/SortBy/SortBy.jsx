"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronDown, Check } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const SortBy = () => {
  const sort = useTranslations("Sort");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const sortItem = [
    {
      value: "new",
      label: sort("new"),
    },
    {
      value: "popular",
      label: sort("popular"),
    },
    {
      value: "low",
      label: sort("priceDown"),
    },
    {
      value: "high",
      label: sort("priceUp"),
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={`w-[240px]`}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="size-full max-w-[240px] justify-between rounded-2xl border-button border-2"
        >
          {value
            ? sortItem.find((framework) => framework.value === value)?.label
            : sort("title")}
          <ChevronDown className="ml-2 h-6 w-6 shrink-0 text-button" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[240px] max-h-[44px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {sortItem.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
