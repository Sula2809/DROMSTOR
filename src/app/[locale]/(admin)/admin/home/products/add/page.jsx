import { Button } from "@/components/ui/button";
import { SelectName } from "@/components/admin/AddProduct/SelectName/SelectName";
import { SelectDescription } from "@/components/admin/AddProduct/SelectDescription/SelectDescription";
import { SelectColor } from "@/components/admin/AddProduct/SelectColor/SelectColor";
import { SelectMaterial } from "@/components/admin/AddProduct/SelectMaterial/SelectMaterial";
import { SelectCategory } from "@/components/admin/AddProduct/SelectCategory/SelectCategory";
import { SelectSubCategory } from "@/components/admin/AddProduct/SelectSubCategory/SelectSubCategory";
import { SelectSubSubCategory } from "@/components/admin/AddProduct/SelectSubSubCategory/SelectSubSubCategory";
import { SelectPrice } from "@/components/admin/AddProduct/SelectPrice/SelectPrice";

export default function AddProduct() {
  return (
    <div className={`space-y-5`}>
      <h2 className={`text-body1`}>Добавить продукт</h2>
      <div className={`space-y-5`}>
        <SelectName label="Название (на русском):" />
        <SelectName label="Название (на английском):" />
        <SelectDescription label="Описание (на русском):" />
        <SelectDescription label="Описание (на английском):" />
        <SelectColor label="Цвет:" />
        <SelectMaterial label="Материал:" />
        <SelectCategory label="Категория:" />
        <SelectSubCategory label="Подкатегория:" />
        <SelectSubSubCategory label="Субподкатегория:" />
        <SelectPrice label="Цена:" />
      </div>
      <div className={`bg-admin-grey-hover flex gap-5 py-1 px-4`}>
        <Button className={`bg-admin-blue md:hover:bg-admin-blue-hover`}>
          Сохранить
        </Button>
        <Button className={`bg-admin-blue md:hover:bg-admin-blue-hover`}>
          Сохранить и добавить еще
        </Button>
      </div>
    </div>
  );
}
