import { useLocale } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { locales } from "@/config";

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur, index) => (
        <option key={index} value={cur}>
          english
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
