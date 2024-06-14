import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddOutline } from "@/components/admin/Buttons/AddOutline";

export const SelectSubCategory = ({ label }) => {
  return (
    <div
      className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}
    >
      <p className={`text-body3 font-bold w-1/4`}>{label}</p>
      <div className={`flex items-center gap-4`}>
        <Select>
          <SelectTrigger className="bg-inherit w-96">
            <SelectValue placeholder="Выберите подкатегорию"></SelectValue>
          </SelectTrigger>
          <SelectContent
            className={`bg-admin-blue-hover text-white font-bold `}
          >
            <SelectGroup className={`bg-inherit`}>
              <SelectItem value="ru">подкатегорию</SelectItem>
              <SelectItem value="en">подкатегорию</SelectItem>
              <SelectItem value="en">подкатегорию</SelectItem>
              <SelectItem value="en">подкатегорию</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <AddOutline link={"/subcategory/add&edit&edit"} />
      </div>
    </div>
  );
};
