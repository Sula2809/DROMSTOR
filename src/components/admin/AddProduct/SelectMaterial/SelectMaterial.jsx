import {AddOutline} from "@/components/admin/Buttons/AddOutline";
import {ScrollArea} from "@/components/ui/scroll-area";

export const SelectMaterial = ({label, setSelectedMaterial, selectedMaterials, materials, data}) => {
    const handleItemClick = (id) => {
        setSelectedMaterial((prevSelectedIds) => {
            if (prevSelectedIds?.includes(id)) {
                // If the id is already selected, remove it from the array
                return prevSelectedIds.filter((selectedId) => selectedId !== id);
            } else {
                // Otherwise, add it to the array
                return [...prevSelectedIds, id];
            }
        });
    };


    return (
        <div className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}>
            <p className={`text-body3 font-bold w-1/4`}>{label}</p>
            <div className={`flex items-center gap-4`}>
                <div>
                    <ScrollArea className={`w-[380px] h-[200px] border border-white p-2`}>
                        {data?.map((item, index) => (
                            <p
                                key={item.id}
                                className={`cursor-pointer flex justify-between my-1 ${selectedMaterials?.includes(item.id) ? "bg-red-500" : index % 2 === 0 ? "bg-slate-700" : "bg-inherit"}`}
                                onClick={() => handleItemClick(item.id)}
                            >
                                {item.name} <img src={item.image} alt="" className={`size-10`}/>
                            </p>
                        ))}
                    </ScrollArea>
                    {Array.isArray(materials) && materials.length > 0 && (
                        <div>Выбранные: {materials.map((item, index) => (<div key={index}>{item.name}</div>))}</div>
                    )}
                </div>
                <AddOutline link={"/colors/add&edit"}/>
            </div>
        </div>
    );
};
