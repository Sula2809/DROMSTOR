import { AddOutline } from "@/components/admin/AddButton/AddOutline";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectColor = ({ label }) => {
  return (
    <div
      className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}
    >
      <p className={`text-body3 font-bold w-1/4`}>{label}</p>
      <div className={`flex items-center gap-4`}>
        <Select>
          <SelectTrigger className="bg-inherit w-96">
            <SelectValue placeholder="Выберите цвет"></SelectValue>
          </SelectTrigger>
          <SelectContent
            className={`bg-admin-blue-hover text-white font-bold `}
          >
            <SelectGroup className={`bg-inherit`}>
              <SelectItem value="ru">Белый</SelectItem>
              <SelectItem value="en">Черный</SelectItem>
              <SelectItem value="en">Желтый</SelectItem>
              <SelectItem value="en">Зеленый</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <AddOutline link={"/colors/add"} />
      </div>
    </div>
  );
};
