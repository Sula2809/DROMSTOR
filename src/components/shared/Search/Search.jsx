import { Input } from "@/components/ui/input";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const Search = ({ classname }) => {
  const t = useTranslations();
  return (
    <div
      className={cn(
        `relative md:max-w-[400px] lg:max-w-[540px] mx-auto`,
        classname,
      )}
    >
      <Input
        type="search"
        className={`border border-border_brown rounded-full focus:outline-red-700 focus:border-none`}
        placeholder={t("Search")}
      />
      <Image
        width={32}
        height={32}
        src="/icons/search.svg"
        alt="search-icon"
        className={`block size-8 absolute right-3 top-1/2 translate-y-[-50%] cursor-pointer`}
      />
    </div>
  );
};
