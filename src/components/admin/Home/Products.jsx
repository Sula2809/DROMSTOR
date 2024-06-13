"use client";
import { Title } from "@/components/admin/SectionTitle/Title";
import { AddIcon } from "@/components/admin/icons/AddIcon";
import { EditIcon } from "@/components/admin/icons/EditIcon";
import { useRouter } from "next/navigation";

export const Products = ({ isRoute = true }) => {
  const router = useRouter();
  const AdminProducts = [
    { name: "Категории", link: "/admin/home/category" },
    { name: "Подкатегории", link: "/admin/home/subcategory" },
    { name: "Субкатегории", link: "/admin/home/subsubcategory" },
    { name: "Продукт", link: "/admin/home/products" },
    { name: "Изображение продукта", link: "/admin/home/images" },
    { name: "Материал", link: "/admin/home/materials" },
    { name: "Цвета", link: "/admin/home/colors" },
  ];
  return (
    <div className={`w-full`}>
      <Title>Товары</Title>
      <ul className={``}>
        {AdminProducts.map((product, index) => (
          <li
            key={index}
            className={`${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey-hover"} flex justify-between items-center border-b border-b-admin-grey-hover px-3 py-1 cursor-pointer`}
            onClick={() => router.push(product.link)}
          >
            <p className={`text-blue-text font-bold text-body2`}>
              {product.name}
            </p>
            <div className={`flex items-center gap-5`}>
              <div
                className={`cursor-pointer flex items-center gap-1`}
                onClick={() => router.push("/admin/home/category/add")}
              >
                <AddIcon />
                {isRoute && <p>Добавить</p>}
              </div>
              <div
                className={`cursor-pointer flex items-center gap-1`}
                onClick={() => router.push("/admin/home/category/add")}
              >
                <EditIcon />
                {isRoute && <p>Изменить</p>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
