import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddOutline } from "@/components/admin/Buttons/AddOutline";
import { ScrollArea } from "@/components/ui/scroll-area";

export const SelectMaterial = ({ label, setMaterial, materials, data }) => {
  const handleItemClick = (id) => {
    setMaterial((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        // If the id is already selected, remove it from the array
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      } else {
        // Otherwise, add it to the array
        return [...prevSelectedIds, id];
      }
    });
  };

  return (
    <div
      className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}
    >
      <p className={`text-body3 font-bold w-1/4`}>{label}</p>
      <div className={`flex items-center gap-4`}>
        <ScrollArea className={`w-[380px] h-[200px] border border-white p-2`}>
          {data?.map((item, index) => (
            <p
              key={item.id}
              className={`cursor-pointer my-1 ${materials.includes(item.id) ? "bg-red-500" : index % 2 === 0 ? "bg-slate-700" : "bg-inherit"}`}
              onClick={() => handleItemClick(item.id)}
            >
              {item.name}
            </p>
          ))}
        </ScrollArea>
        <AddOutline link={"/colors/add&edit"} />
      </div>
    </div>
  );
};
