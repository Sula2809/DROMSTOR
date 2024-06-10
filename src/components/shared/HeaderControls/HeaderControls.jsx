import LocaleSwitcherSelect from "@/components/shared/LanguageSwitcher/LocaleSwitcherSelect";
import { Drawer } from "@/components/shared/Drawers/FavoritesAdnCartDrawers/Drawer";
import { UserProfile } from "@/components/shared/UserProfile/UserProfile";

export const HeaderControls = () => {
  return (
    <>
      <div
        className={`flex items-center justify-end max-w-[278px] w-full md:gap-7`}
      >
        <Drawer isCart={false} />
        <Drawer isCart={true} />
        <UserProfile />
        <LocaleSwitcherSelect />
      </div>
    </>
  );
};
