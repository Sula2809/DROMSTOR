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
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronDown, Check } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const sortItem = [
  {
    value: "new",
    label: "По новизне",
  },
  {
    value: "popular",
    label: "По популярности",
  },
  {
    value: "low",
    label: "Цена: от низкий",
  },
  {
    value: "high",
    label: "Цена: от высокой",
  },
];

export const SortByMobile = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={`w-1/2`}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="size-full justify-between border-none border border-r-button w-1/2"
        >
          {value
            ? sortItem.find((framework) => framework.value === value)?.label
            : "Отсортировать"}
          <ChevronDown className="ml-2 h-6 w-6 shrink-0 text-button" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[240px] max-h-[44px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
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
