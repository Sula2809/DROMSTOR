"use client";
import { OkIcon } from "@/components/admin/icons/OkIcon";
import { AddButton } from "@/components/admin/Buttons/AddButton";
import { SearchIcon } from "@/components/admin/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { TrashIconWhite } from "@/components/admin/icons/TrashIconWhite";
import { EditButtonOutline } from "@/components/admin/Buttons/EditButtonOutline";
import { useEffect, useState } from "react";
import {
  DeleteCategory,
  GetAllCategory,
} from "@/shared/services/categories/category";
import { useAuth } from "@/shared/Providers/AuthProvider";
import { refreshToken } from "@/shared/services/refreshToken/refreshtoken";

export default function CategoryPage() {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { token, setToken } = useAuth(); // Добавляем setToken

  const fetchCategories = async () => {
    try {
      const res = await GetAllCategory();
      if (res) {
        setCategoryData(res.data);
      }
    } catch (error) {
      console.error("Error fetching categories: ", error);
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      await DeleteCategory(token, id);
      fetchCategories();
    } catch (err) {
      console.error("Error deleting category", err);
      if (err.response?.status === 401) {
        console.log(err.response.status);
        const newToken = await refreshToken(token);
        if (newToken) {
          setToken(newToken); // Обновляем токен в контексте
          await handleDeleteCategory(id); // Повторяем запрос с новым токеном
        }
      }
    }
  };

  const handleDeleteSelectedCategories = async () => {
    try {
      await Promise.all(
        selectedCategories.map((id) => DeleteCategory(token, id)),
      );
      setSelectedCategories([]);
      fetchCategories();
    } catch (err) {
      console.error("Error deleting category", err);
      if (err.response?.status === 401) {
        console.log(err.response.status);
        const newToken = await refreshToken(token);
        if (newToken) {
          setToken(newToken);
          await handleDeleteSelectedCategories();
        }
      }
    }
  };

  const toggleSelectCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((categoryId) => categoryId !== id)
        : [...prev, id],
    );
  };

  const selectAllCategories = () => {
    if (selectedCategories.length === categoryData.length) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(categoryData.map((category) => category.id));
    }
  };

  const filteredCategories = categoryData.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    fetchCategories();
    localStorage.removeItem("productName");
    localStorage.removeItem("buttonAction");
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-body1">Выберите категорию для изменения</h2>
        <AddButton link={"category"}>Добавить категорию</AddButton>
      </div>
      <div className="flex items-center justify-start gap-4 my-5">
        <p className="text-body2">Поиск: </p>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit w-32 md:w-96"
          />
          <SearchIcon className="absolute top-0 right-2" />
        </div>
        <p className="text-body4">
          Выбрано {selectedCategories.length} из {categoryData.length}
        </p>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-admin-grey">
          <tr>
            <th className="p-2 text-center">
              <input
                type="checkbox"
                checked={selectedCategories.length === categoryData.length}
                onChange={selectAllCategories}
              />
            </th>
            <th className="px-2">ID</th>
            <th className="px-2">Категория</th>
            <th className="px-2 flex justify-end">
              <Button
                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                onClick={handleDeleteSelectedCategories}
              >
                <TrashIconWhite />{" "}
                <span className={`hidden sm:inline`}>Удалить</span>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"
              } py-1`}
            >
              <td className="px-2 w-[3%] text-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(item.id)}
                  onChange={() => toggleSelectCategory(item.id)}
                />
              </td>
              <td className="px-2 w-[15%]">{item.id}</td>
              <td className="px-2 w-[70%]">{item.name}</td>
              <td className="px-2 flex gap-2 w-[12%]">
                <EditButtonOutline
                  name={item.name}
                  name_en={item.name_en}
                  productID={item.id}
                  link={"category"}
                >
                  Изменить
                </EditButtonOutline>
                <Button
                  className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                  onClick={() => handleDeleteCategory(item.id)}
                >
                  <TrashIconWhite />{" "}
                  <span className={`hidden sm:inline`}>Удалить</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-5">Категорий: {filteredCategories.length}</div>
    </div>
  );
}
