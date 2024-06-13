"use client";
import { BreadCrumb } from "@/components/shared/BreadCrumb/BreadCrumb";
import { Products } from "@/components/admin/Home/Products";
import { Users } from "@/components/admin/Home/Users";
import { useEffect } from "react";
import { usePathname } from "@/navigation";

export default function AdminHomeLayout({ children, params: { locale } }) {
  const pathname = usePathname();
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
                  ? "Товары"
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
        pathname.split("/").slice(4, 5).join("/") === "edit"
          ? pathname.split("/").slice(0, 4).join("/")
          : pathname.split("/").slice(4, 5).join("/") === "add"
            ? pathname.split("/").slice(0, 4).join("/")
            : pathname,
    },
    {
      name:
        pathname === "/admin/home/category/add"
          ? "Добавить"
          : pathname === "/admin/home/colors/add"
            ? "Добавить"
            : pathname === "/admin/home/images/add"
              ? "Добавить"
              : pathname === "/admin/home/materials/add"
                ? "Добавить"
                : pathname === "/admin/home/products/add"
                  ? "Добавить"
                  : pathname === "/admin/home/subcategory/add"
                    ? "Добавить"
                    : pathname === "/admin/home/subsubcategory/add"
                      ? "Добавить"
                      : pathname === "/admin/home/userBasket/add"
                        ? "Добавить"
                        : pathname === "/admin/home/userOrders/add"
                          ? "Добавить"
                          : pathname === "/admin/home/users/add"
                            ? "Добавить"
                            : pathname === "/admin/home/userFavorites/add"
                              ? "Добавить"
                              : pathname === "/admin/home/category/edit"
                                ? "Изменить"
                                : pathname === "/admin/home/colors/edit"
                                  ? "Изменить"
                                  : pathname === "/admin/home/images/edit"
                                    ? "Изменить"
                                    : pathname === "/admin/home/materials/edit"
                                      ? "Изменить"
                                      : pathname === "/admin/home/products/edit"
                                        ? "Изменить"
                                        : pathname ===
                                            "/admin/home/subcategory/edit"
                                          ? "Изменить"
                                          : pathname ===
                                              "/admin/home/subsubcategory/edit"
                                            ? "Изменить"
                                            : pathname ===
                                                "/admin/home/userBasket/edit"
                                              ? "Изменить"
                                              : pathname ===
                                                  "/admin/home/userOrders/edit"
                                                ? "Изменить"
                                                : pathname ===
                                                    "/admin/home/users/edit"
                                                  ? "Изменить"
                                                  : pathname ===
                                                      "/admin/home/userFavorites/edit"
                                                    ? "Изменить"
                                                    : null,
      link: pathname,
    },
  ];

  useEffect(() => {
    console.log("Current path:", pathname.split("/").slice(4, 5).join("/"));
    console.log("Current path2:", pathname.split("/").slice(0, 4).join("/"));
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black">
      <div className="w-full p-3 bg-breadCrumbs container">
        <BreadCrumb items={adminBreadCrumbs} />
      </div>
      <div className="flex gap-10 py-5 container">
        <div className="space-y-5 w-1/4">
          <Products isRoute={false} />
          <Users isRoute={false} />
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </div>
  );
}
