import { locales, pathnames, defaultLocale, host } from "@/config";
import { getPathname } from "@/navigation";

export default function sitemap() {
  const keys = Object.keys(pathnames);

  function getUrl(key, locale) {
    const pathname = getPathname({ locale, href: key });
    return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale)]),
      ),
    },
  }));
}
