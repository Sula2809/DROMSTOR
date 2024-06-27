"use client";
import { OkIcon } from "@/components/admin/icons/OkIcon";
import { AddButton } from "@/components/admin/Buttons/AddButton";
import { SearchIcon } from "@/components/admin/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { TrashIconWhite } from "@/components/admin/icons/TrashIconWhite";
import { EditButtonOutline } from "@/components/admin/Buttons/EditButtonOutline";
import { useEffect, useState } from "react";
import { DeleteColors, GetColors } from "@/shared/services/colors/colors";
import { useAuth } from "@/shared/Providers/AuthProvider";

export default function ColorsPage() {
  const [colorsData, setColorsData] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { token } = useAuth();

  const fetchColors = async () => {
    try {
      const res = await GetColors();
      setColorsData(res);
    } catch (error) {
      console.error("Error fetching colors: ", error);
    }
  };

  const handleDeleteColor = async (id) => {
    try {
      await DeleteColors(token, id);
      fetchColors();
    } catch (err) {
      console.error("Error delete color", err);
    }
  };

  const handleDeleteSelectedColors = async () => {
    try {
      await Promise.all(selectedColors.map((id) => DeleteColors(token, id)));
      setSelectedColors([]);
      fetchColors();
    } catch (err) {
      console.error("Error deleting selected colors", err);
    }
  };

  const toggleSelectColor = (id) => {
    setSelectedColors((prev) =>
      prev.includes(id)
        ? prev.filter((colorId) => colorId !== id)
        : [...prev, id],
    );
  };

  const selectAllColors = () => {
    if (selectedColors.length === colorsData.length) {
      setSelectedColors([]);
    } else {
      setSelectedColors(colorsData.map((color) => color.id));
    }
  };

  const filteredColors = colorsData.filter((color) =>
    color.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    fetchColors();
    localStorage.removeItem("productName");
    localStorage.removeItem("buttonAction");
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-body1">Выберите цвет для изменения</h2>
        <AddButton link={"colors"}>Добавить цвет</AddButton>
      </div>
      <div className="flex items-center justify-start gap-4 my-5">
        <p className="text-body2">Поиск: </p>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit"
          />
          <SearchIcon className="absolute top-0 right-2" />
        </div>
        <p className="text-body4">
          Выбрано {selectedColors.length} из {colorsData.length}
        </p>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-admin-grey">
          <tr>
            <th className="p-2 text-center">
              <input
                type="checkbox"
                checked={selectedColors.length === colorsData.length}
                onChange={selectAllColors}
              />
            </th>
            <th className="px-2">ID</th>
            <th className="px-2">Цвет</th>
            <th className="px-2">Пример</th>
            <th className="px-2 flex justify-end">
              <Button
                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                onClick={handleDeleteSelectedColors}
              >
                <TrashIconWhite /> Удалить
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredColors.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"
              } py-1`}
            >
              <td className="px-2 w-[3%] text-center">
                <input
                  type="checkbox"
                  checked={selectedColors.includes(item.id)}
                  onChange={() => toggleSelectColor(item.id)}
                />
              </td>
              <td className="px-2 w-[15%]">{item.id}</td>
              <td className="px-2 w-[35%]">{item.name}</td>
              <td className="px-2 w-[35%]">
                <img
                  src={item.image}
                  alt={item.id}
                  className="size-10 object-cover"
                />
              </td>
              <td className="px-2 flex gap-2 w-[12%]">
                <EditButtonOutline
                  name={item.name}
                  productID={item.id}
                  img={item.image}
                  link={"colors"}
                >
                  Изменить
                </EditButtonOutline>
                <Button
                  className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                  onClick={() => handleDeleteColor(item.id)}
                >
                  <TrashIconWhite /> Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-5">Цветов: {filteredColors.length}</div>
    </div>
  );
}
