import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DrawerContent } from "@/components/shared/Drawers/FavoritesAdnCartDrawers/DrawerContent";
import { FavoriteIcon } from "@/components/shared/Icons/FavoriteIcon";
import { BugIcon } from "@/components/shared/Icons/BugIcon";

export const Drawer = ({ isCart }) => {
  return (
    <Sheet className="drawer">
      <SheetTrigger asChild className="drawer ml-2">
        {isCart ? (
          <span className={`cursor-pointer`}>
            <BugIcon />
          </span>
        ) : (
          <span className={`cursor-pointer `}>
            <FavoriteIcon />
          </span>
        )}
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className={`bg-background_section w-full lg:w-[800px] p-3 lg:p-12`}
      >
        <DrawerContent isCart={isCart} />
      </SheetContent>
    </Sheet>
  );
};
