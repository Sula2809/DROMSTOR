"use client";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { Products } from "@/components/admin/Home/Products";
import { Users } from "@/components/admin/Home/Users";
import { useEffect, useState } from "react";
import { usePathname } from "@/navigation";

export default function AdminHomeLayout({ children, params: { locale } }) {
  const pathname = usePathname();
  const [currentAction, setCurrentAction] = useState("");

  const adminBreadCrumbs = [
    { name: "Главная", link: "/" },
    { name: "Панель администратора", link: "/admin" },
    {
      name:
        pathname === "/admin/home/users"
          ? "Пользователи"
          : pathname === "/admin/home/userFavorites"
            ? "Пользователи"
            : pathname === "/admin/home/userBasket"
              ? "Пользователи"
              : pathname === "/admin/home/userOrders"
                ? "Пользователи"
                : "Товары",
      link: "",
    },
    {
      name:
        pathname.split("/").slice(0, 4).join("/") === "/admin/home/category"
          ? "Категории"
          : pathname.split("/").slice(0, 4).join("/") === "/admin/home/colors"
            ? "Цвета"
            : pathname.split("/").slice(0, 4).join("/") === "/admin/home/images"
              ? "Изображения"
              : pathname.split("/").slice(0, 4).join("/") ===
                  "/admin/home/materials"
                ? "Материалы"
                : pathname.split("/").slice(0, 4).join("/") ===
                    "/admin/home/products"
                  ? "Продукты"
                  : pathname.split("/").slice(0, 4).join("/") ===
                      "/admin/home/subcategory"
                    ? "Подкатегории"
                    : pathname.split("/").slice(0, 4).join("/") ===
                        "/admin/home/subsubcategory"
                      ? "Субподкатегории"
                      : pathname.split("/").slice(0, 4).join("/") ===
                          "/admin/home/userBasket"
                        ? "Корзина пользователей"
                        : pathname.split("/").slice(0, 4).join("/") ===
                            "/admin/home/userOrders"
                          ? "Заказы пользователей"
                          : pathname.split("/").slice(0, 4).join("/") ===
                              "/admin/home/users"
                            ? "Список пользователей"
                            : pathname.split("/").slice(0, 4).join("/") ===
                                "/admin/home/userFavorites"
                              ? "Избранные пользователей"
                              : "не определено",
      link:
        pathname.split("/").slice(4, 5).join("/") === "add&edit"
          ? pathname.split("/").slice(0, 4).join("/")
          : pathname.split("/").slice(3, 4).join("/") === "category" ||
              pathname.split("/").slice(3, 4).join("/") === "subcategory" ||
              pathname.split("/").slice(3, 4).join("/") === "subsubcategory" ||
              pathname.split("/").slice(3, 4).join("/") === "products" ||
              pathname.split("/").slice(3, 4).join("/") === "colors" ||
              pathname.split("/").slice(3, 4).join("/") === "images" ||
              pathname.split("/").slice(3, 4).join("/") === "materials" ||
              pathname.split("/").slice(3, 4).join("/") === "userBasket" ||
              pathname.split("/").slice(3, 4).join("/") === "userFavorites" ||
              pathname.split("/").slice(3, 4).join("/") === "userOrders" ||
              pathname.split("/").slice(3, 4).join("/") === "users"
            ? pathname.split("/").slice(0, 4).join("/")
            : "",
    },
    {
      name: currentAction,
      link: pathname,
    },
  ];

  useEffect(() => {
    if (pathname.split("/").slice(4, 5).join("/") === "add&edit") {
      const action = localStorage.getItem("buttonAction");
      if (action === "edit") {
        setCurrentAction("Изменить");
      }
      if (action === "add") {
        setCurrentAction("Добавить");
      }
    } else {
      setCurrentAction("");
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full p-3 bg-breadCrumbs container">
        <BreadCrumb items={adminBreadCrumbs} />
      </div>
      <div className="flex flex-col md:flex-row gap-2 lg:gap-10 py-5 container">
        <div className="space-y-5 w-full md:w-1/4">
          <Products isRoute={false} />
          <Users isRoute={false} />
        </div>
        <div className="w-full md:w-3/4">{children}</div>
      </div>
    </div>
  );
}
