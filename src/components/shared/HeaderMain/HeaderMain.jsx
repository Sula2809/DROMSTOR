import { HeaderControls } from "@/components/shared/HeaderControls/HeaderControls";
import { Search } from "@/components/shared/Search/Search";
import Link from "next/link";
import { CategoryDrawer } from "../Drawers/CategoryDrawer";
import { CategoryDrawerMobile } from "@/components/shared/Drawers/CategoryDrawerMobile";

export const HeaderMain = () => {
  return (
    <div
      className={`container space-y-3 flex-col md:flex-row justify-between items-center py-4`}
    >
      <div className="flex justify-between w-full items-center">
        <div className={`flex items-center justify-between gap-4 h-full`}>
          <CategoryDrawer className={`hidden md:block`} />
          <CategoryDrawerMobile className={`md:hidden`} />
          <div className={`h-full`}>
            <Link href={"/"} className={`max-w-[166px] max-h-[48px]`}>
              <img
                src="/mainLogo.svg"
                alt="logo"
                className={`object-fit size-full w-[200px] h-[68px]`}
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-full mx-10">
          <Search />
        </div>
        <HeaderControls />
      </div>
      <div className={`pb-2 block md:hidden`}>
        <Search />
      </div>
    </div>
  );
};
