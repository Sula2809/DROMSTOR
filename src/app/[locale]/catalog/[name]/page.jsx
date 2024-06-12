import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { decodeURL } from "@/shared/services/decodeURL";
import { CatalogDesktop } from "@/components/shared/Catalog/CatalogDesktop";
import { CatalogMobile } from "@/components/shared/Catalog/CatalogMobile";
import { useTranslations } from "next-intl";

export default function CatalogPage({ params }) {
  const categoryName = decodeURL(params.name);
  const breadCrumbs = useTranslations("BreadCrumbs");
  const catalogBreadCrumbs = [
    { name: breadCrumbs("home"), link: "/" },
    { name: breadCrumbs("catalog"), link: "/catalog" },
    {
      name: categoryName,
      link: `/catalog/${categoryName}`,
    },
  ];
  return (
    <div className={` md:container md:px-10 py-0 md:py-5`}>
      <BreadCrumb items={catalogBreadCrumbs} className={`hidden md:block `} />
      <CatalogDesktop className={"hidden md:flex"} />
      <CatalogMobile className={`md:hidden p-0`} name={categoryName} />
    </div>
  );
}
