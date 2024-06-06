import {Input} from "@/components/ui/input";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useTranslations} from "next-intl";

export const Search = () => {
    const t = useTranslations("Header")
    return (
        <div className={`relative max-w-[540px] w-full`}>
            <Input type="search" className={`border border-border_brown rounded-full focus:outline-red-700 focus:border-none`} placeholder={t('inputSearch')}/>
            <img src='/icons/search.svg' alt='search-icon' className={`block size-8 absolute right-3 top-1/2 translate-y-[-65%] cursor-pointer`}/>
        </div>
    )
}