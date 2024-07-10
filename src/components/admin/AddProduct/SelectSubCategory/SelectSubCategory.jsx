import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {AddOutline} from "@/components/admin/Buttons/AddOutline";

export const SelectSubCategory = ({label, setSubCategory, localCat, data, selectedCategory}) => {
    const handleChange = (e) => {
        setSubCategory([e]);
    };
    return (
        <div className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}>
            <p className={`text-body3 font-bold w-1/4`}>{label}</p>
            <div className={`flex items-center gap-4`}>
                <div>
                    <Select onValueChange={handleChange}>
                        <SelectTrigger className="bg-inherit w-96">
                            <SelectValue placeholder="Выберите подкатегорию"></SelectValue>
                        </SelectTrigger>
                        <SelectContent className={`bg-admin-blue-hover text-white font-bold `}>
                            <SelectGroup className={`bg-inherit`}>
                                {data
                                    ?.filter(item => item.category === selectedCategory)
                                    .map(item => (
                                        <SelectItem value={item.id} key={item.id}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {localCat && <div className={`mt-2`}>Выбранное: {localCat}</div>}
                </div>
                <AddOutline link={"/subcategory/add&edit&edit"}/>
            </div>
        </div>
    );
};
