"use client";
import { OkIcon } from "@/components/admin/icons/OkIcon";
import { AddButton } from "@/components/admin/Buttons/AddButton";
import { SearchIcon } from "@/components/admin/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { TrashIconWhite } from "@/components/admin/icons/TrashIconWhite";
import { EditButtonOutline } from "@/components/admin/Buttons/EditButtonOutline";
import { useEffect, useState } from "react";
import {
  GetMaterials,
  DeleteMaterials,
} from "@/shared/services/materials/materials";
import { useAuth } from "@/shared/Providers/AuthProvider";

export default function MaterialsPage() {
  const [materialsData, setMaterialsData] = useState([]);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { token } = useAuth();

  const fetchingMaterials = async () => {
    const res = await GetMaterials();
    if (res) {
      console.log(res);
      setMaterialsData(res);
      setFilteredMaterials(res);
    }
  };

  const toggleSelectMaterial = (id) => {
    setSelectedMaterials((prev) =>
      prev.includes(id)
        ? prev.filter((materialId) => materialId !== id)
        : [...prev, id],
    );
  };

  const selectAllMaterials = () => {
    if (selectedMaterials.length === filteredMaterials.length) {
      setSelectedMaterials([]);
    } else {
      setSelectedMaterials(filteredMaterials.map((material) => material.id));
    }
  };

  const handleDeleteMaterial = async (id) => {
    try {
      await DeleteMaterials(token, id);

      fetchingMaterials();
    } catch (err) {
      console.error("Error delete color", err);
    }
  };

  const handleDeleteSelectedMaterials = async () => {
    try {
      await Promise.all(
        selectedMaterials.map((id) => DeleteMaterials(token, id)),
      );
      setSelectedMaterials([]);
      fetchingMaterials().then(() => console.log("Success"));
    } catch (err) {
      console.error("Error deleting selected materials", err);
    }
  };

  useEffect(() => {
    try {
      fetchingMaterials().then((res) => {
        console.log("success fetching materials", res);
      });
    } catch (err) {
      console.error("Error fetching materials", err);
    }
  }, []);

  useEffect(() => {
    const filtered = materialsData.filter((material) =>
      material.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredMaterials(filtered);
  }, [searchQuery, materialsData]);

  return (
    <div>
      <div className="flex justify-between items-center my-5">
        <h2 className={`text-body1`}>Выберите материал для изменения</h2>
        <AddButton link={"materials"}>Добавить материал</AddButton>
      </div>
      <div className="flex items-center justify-start gap-4 my-5">
        <p className={`text-body2`}>Поиск: </p>
        <div className="relative">
          <input
            type="text"
            className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="absolute top-0 right-2" />
        </div>
        <p className={`text-body4`}>
          Выбрано {selectedMaterials.length} из {filteredMaterials.length}
        </p>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-admin-grey">
          <tr>
            <th className="p-2 text-center">
              <input
                type="checkbox"
                checked={selectedMaterials.length === filteredMaterials.length}
                onChange={selectAllMaterials}
              />
            </th>
            <th className="px-2">ID</th>
            <th className="px-2">Материал</th>
            <th className="px-2">Пример</th>
            <th className="px-2 flex justify-end">
              <Button
                className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                onClick={handleDeleteSelectedMaterials}
              >
                <TrashIconWhite /> Удалить
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredMaterials.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b ${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"} py-1`}
            >
              <td className="px-2 w-[3%] text-center">
                <input
                  type="checkbox"
                  checked={selectedMaterials.includes(item.id)}
                  onChange={() => toggleSelectMaterial(item.id)}
                />
              </td>
              <td className="px-2 w-[15%]">{item.id}</td>
              <td className="px-2 w-[35%]">{item.name}</td>
              <td className="px-2 w-[35%]">
                <img
                  src={item.image}
                  alt={item.name}
                  className={`size-10 object-cover`}
                />
              </td>
              <td className="px-2 flex gap-2 w-[12%]">
                <EditButtonOutline
                  name={item.name}
                  img={item.image}
                  productID={item.id}
                  link={"materials"}
                >
                  Изменить
                </EditButtonOutline>
                <Button
                  className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2"
                  onClick={() => handleDeleteMaterial(item.id)}
                >
                  <TrashIconWhite /> Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`my-5`}>Материалов: {materialsData.length}</div>
    </div>
  );
}
