import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {AddOutline} from "@/components/admin/Buttons/AddOutline";

export const SelectSubSubCategory = ({label, setSubSubCategory, localSubCat, data, selectedSubCategory}) => {
    const handleChange = (e) => {
        setSubSubCategory([e]);
    };
    console.log(selectedSubCategory);
    return (
        <div className={`flex items-center w-full border-b border-b-admin-grey-hover pb-5`}>
            <p className={`text-body3 font-bold w-1/4`}>{label}</p>
            <div className={`flex items-center gap-4`}>
                <div>
                    <Select onValueChange={handleChange}>
                        <SelectTrigger className="bg-inherit w-96">
                            <SelectValue placeholder="Выберите субподкатегорию"></SelectValue>
                        </SelectTrigger>
                        <SelectContent className={`bg-admin-blue-hover text-white font-bold `}>
                            <SelectGroup className={`bg-inherit`}>
                                {data
                                    ?.filter(item => item.subcategory === selectedSubCategory[0])
                                    .map(item => (
                                        <SelectItem value={item.id} key={item.id}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {localSubCat && <div className={`mt-2`}>Выбранное: {localSubCat}</div>}
                </div>
                <AddOutline link={"/subsubcategory/add&edit&edit"}/>
            </div>
        </div>
    );
};
