import { OkIcon } from "@/components/admin/icons/OkIcon";
import { AddButton } from "@/components/admin/Buttons/AddButton";
import { SearchIcon } from "@/components/admin/icons/SearchIcon";
import { Button } from "@/components/ui/button";
import { TrashIconWhite } from "@/components/admin/icons/TrashIconWhite";
import { EditButtonOutline } from "@/components/admin/Buttons/EditButtonOutline";

function generateRandomId() {
  return Math.random().toString(36).substr(2, 9);
}

const subsubcategories = [
  { id: generateRandomId(), name: "Электроника" },
  { id: generateRandomId(), name: "Одежда" },
];

export default function SubsubcategoriesPage() {
  return (
    <div>
      <div className={`flex gap-5 bg-admin-green py-2 px-3`}>
        <OkIcon />
        <p>Субкатегория Стеновые панели была успешно добавлена</p>
      </div>
      <div className="flex justify-between items-center my-5">
        <h2 className={`text-body1`}>Выберите категорию для изменения</h2>
        <AddButton link={"subsubcategory"}>Добавить категорию</AddButton>
      </div>
      <div className="flex items-center justify-start gap-4 my-5">
        <p className={`text-body2`}>Поиск: </p>
        <div className="relative">
          <input
            type="text"
            className="border border-white rounded-full text-body2 px-3 py-1 bg-inherit"
          />
          <SearchIcon className="absolute top-0 right-2" />
        </div>
        <p className={`text-body4`}>Выбрано 0 из {subsubcategories.length}</p>
      </div>
      <table className="w-full text-left border-collapse">
        <thead className="bg-admin-grey">
          <tr>
            <th className="p-2 text-center">
              <input type="checkbox" />
            </th>
            <th className="px-2">ID</th>
            <th className="px-2">Субкатегория</th>
            <th className="px-2 flex justify-end">
              <Button className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2">
                <TrashIconWhite /> Удалить
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {subsubcategories.map((item, index) => (
            <tr
              key={item.id}
              className={`border-b ${index % 2 === 0 ? "bg-inherit" : "bg-admin-grey"} py-1`}
            >
              <td className="px-2 w-[3%] text-center">
                <input type="checkbox" />
              </td>
              <td className="px-2 w-[15%]">{item.id}</td>
              <td className="px-2 w-[70%]">{item.name}</td>
              <td className="px-2 flex gap-2 w-[12%]">
                <EditButtonOutline link={"subsubcategory"}>
                  Изменить
                </EditButtonOutline>
                <Button className="bg-inherit hover:bg-inherit hover:border-b rounded-none p-0 px-1 duration-700 flex items-center gap-2">
                  <TrashIconWhite /> Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={`my-5`}>Категорий: {subsubcategories.length}</div>
    </div>
  );
}
