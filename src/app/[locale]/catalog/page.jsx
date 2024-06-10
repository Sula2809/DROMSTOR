import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { CatalogDesktop } from "@/components/shared/Catalog/CatalogDesktop";
import { CatalogMobile } from "@/components/shared/Catalog/CatalogMobile";

const catalogBreadCrumbs = [
  { name: "Главная", link: "/" },
  { name: "Каталог", link: "/catalog" },
];

export default function CatalogPage() {
  return (
    <div className={` md:container md:px-10 py-0`}>
      <BreadCrumb items={catalogBreadCrumbs} className={`hidden md:block `} />
      <CatalogDesktop className={"hidden md:flex"} />
      <CatalogMobile className={`md:hidden p-0`} />
    </div>
  );
}
