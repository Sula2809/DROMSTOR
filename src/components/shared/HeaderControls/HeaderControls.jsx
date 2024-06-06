import {LanguageSwitcher} from "@/components/shared/LanguageSwitcher/LanguageSwitcher";
import {Drawer} from "@/components/shared/Drawers/FavoritesAdnCartDrawers/Drawer";
import {UserProfile} from "@/components/shared/UserProfile/UserProfile";

export const HeaderControls = () => {
    return (
        <>
            <div className={`flex items-center justify-between max-w-[278px] w-full`}>
                <div className={`flex justify-between items-center max-w-[192px] w-full`}>
                    <Drawer isCart={false}/>
                    <Drawer isCart={true}/>
                    <UserProfile />
                </div>
                <LanguageSwitcher/>
            </div>
        </>
    )
}