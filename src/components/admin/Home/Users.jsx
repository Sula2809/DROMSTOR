"use client";
import { Title } from "@/components/admin/SectionTitle/Title";
import { AddIcon } from "@/components/admin/icons/AddIcon";
import { EditIcon } from "@/components/admin/icons/EditIcon";
import { useRouter } from "next/navigation";

export const Users = ({ isRoute = true }) => {
  const router = useRouter();
  const Users = [
    { name: "Список всех пользователей", link: "/admin/home/users" },
    { name: "Избранные пользователей", link: "/admin/home/userFavorites" },
    { name: "Корзина пользователей", link: "/admin/home/userBasket" },
    { name: "Заказы пользователей", link: "/admin/home/userOrders" },
  ];
  return (
    <div className={`w-full`}>
      <Title>Пользователи</Title>
      <ul className={``}>
        {Users.map((el, index) => (
          <li
            key={index}
            className={`${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey-hover"} flex justify-between items-center border-b border-b-custom-grey px-3 py-1 cursor-pointer`}
            onClick={() => router.push(el.link)}
          >
            <p className={`text-blue-text font-bold text-body2`}>{el.name}</p>
            <div className={`flex items-center gap-5`}>
              <div className={`cursor-pointer flex items-center gap-1`}>
                <AddIcon />
                {isRoute && <p>Добавить</p>}
              </div>
              <div className={`cursor-pointer flex items-center gap-1`}>
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
