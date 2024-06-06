import {HeaderControls} from "@/components/shared/HeaderControls/HeaderControls";
import {Search} from "@/components/shared/Search/Search";
import Link from "next/link";
import CategoryDrawer from "../Drawers/CategoryDrawer";
import Image from "next/image";

export  const HeaderMain = () => {
    return (
        <div className={`container flex justify-between items-center py-4 px-20`}>
            <div className="flex justify-between w-full">
            <div className={`flex items-center gap-10`}>
                <CategoryDrawer />
                <div>
                    <Link href={'/'}>
                        <Image src="/mainLogo.svg" alt="logo" width={166} height={48}/>
                    </Link>
                </div>
            </div>
            <Search className="hidden lg:block"/>
            <HeaderControls/>
            </div>
            <div className={`pb-2 block lg:hidden`}>
                <Search/>
            </div>

        </div>
    )
}