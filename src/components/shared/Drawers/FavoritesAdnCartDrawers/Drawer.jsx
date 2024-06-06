import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {DrawerContent} from "@/components/shared/Drawers/FavoritesAdnCartDrawers/DrawerContent";
import {FavoriteIcon} from "@/components/shared/Icons/FavoriteIcon";
import {BugIcon} from "@/components/shared/Icons/BugIcon";

export const Drawer = ({isCart}) => {
    return (
        <Sheet >
            <SheetTrigger asChild>
                {isCart ? <span className={`cursor-pointer `}><BugIcon/></span> : <span className={`cursor-pointer `}><FavoriteIcon/></span>}
            </SheetTrigger>
            <SheetContent side={'right'} className={`bg-background_section w-[800px] p-12`}>
                <DrawerContent isCart={isCart}/>
            </SheetContent>
        </Sheet>
    )
}