'use client'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Bars3Icon} from "@heroicons/react/24/outline";
import { useState } from 'react'

export const HeaderDrawer = () => {
    const [drawer, setDrawer] = useState(false)

    const closeDrawer = () => {
        setDrawer(false);
    }

    return (
        <Sheet open={drawer} onOpenChange={setDrawer}>
            <SheetTrigger asChild>
                <Button variant="outline" className={`border-none`}>
                    <Bars3Icon className={`size-8`}/>
                </Button>
            </SheetTrigger>
            <SheetContent side={'left'} className={`bg-background_section px-18 py-24`}>
                <ul>
                    <li onClick={() => setDrawer(true)}>
                        1
                        {drawer && (
                            <div className="h-full w-[400px] bg-yellow-300 absolute top-0 left-1/2">
                                hello   
                                <p onClick={closeDrawer}>close</p>
                            </div>
                        )}
                    </li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </SheetContent>
        </Sheet>
    )
}
