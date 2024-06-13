import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddOutline } from "@/components/admin/AddButton/AddOutline";

export const SelectMaterial = ({ label }) => {
  return (
    <div
      className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}
    >
      <p className={`text-body3 font-bold w-1/4`}>{label}</p>
      <div className={`flex items-center gap-4`}>
        <Select>
          <SelectTrigger className="bg-inherit w-96">
            <SelectValue placeholder="Выберите материал"></SelectValue>
          </SelectTrigger>
          <SelectContent
            className={`bg-admin-blue-hover text-white font-bold `}
          >
            <SelectGroup className={`bg-inherit`}>
              <SelectItem value="ru">Дерево</SelectItem>
              <SelectItem value="en">Металл</SelectItem>
              <SelectItem value="en">Медь</SelectItem>
              <SelectItem value="en">Стекло</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <AddOutline link={"/materials/add"} />
      </div>
    </div>
  );
};
