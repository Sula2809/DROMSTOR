import {AdjustmentsVerticalIcon, PlusIcon} from "@heroicons/react/24/outline";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {RadioGroupItem} from "@/components/ui/radio-group";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";

export const Filter = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className={`flex gap-5 items-center`}>
                    <AdjustmentsVerticalIcon className={`size-8`}/>
                    <p>Фильтры</p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 space-y-3">
                    <div className={`flex gap-3 items-center`}>
                        <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                            здесь1</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <PlusIcon className={`size-5 cursor-pointer`}/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 space-y-3 bg-border_brown">
                                <form className={`space-y-2`}>
                                    <div className={`flex items-center justify-between`}>
                                        <div className={`flex gap-3 items-center`}>
                                            <input className={`size-6`} type="radio"/>
                                            <Label className={`text-xl`}>Gray</Label>
                                        </div>
                                        <div className={`flex gap-3 items-center`}>
                                            <Label className={`text-xl`}>64</Label>
                                            <Checkbox className={`size-6 rounded-none`}/>
                                        </div>
                                    </div>
                                    <div className={`flex items-center justify-between`}>
                                        <div className={`flex gap-3 items-center`}>
                                            <input className={`size-6`} type="radio"/>
                                            <Label className={`text-xl`}>Gray</Label>
                                        </div>
                                        <div className={`flex gap-3 items-center`}>
                                            <Label className={`text-xl`}>64</Label>
                                            <Checkbox className={`size-6 rounded-none`}/>
                                        </div>
                                    </div>
                                    <div className={`flex items-center justify-between`}>
                                        <div className={`flex gap-3 items-center`}>
                                            <input className={`size-6`} type="radio"/>
                                            <Label className={`text-xl`}>Gray</Label>
                                        </div>
                                        <div className={`flex gap-3 items-center`}>
                                            <Label className={`text-xl`}>64</Label>
                                            <Checkbox className={`size-6 rounded-none`}/>
                                        </div>
                                    </div>
                                </form>
                                <div className={`w-full h-[1px] bg-black_text`}></div>
                                <div className={`flex justify-between`}>
                                    <Button className={`bg-background_section hover:bg-background_hero text-custom_button hover:text-background_section py-2 px-6`}>Reset</Button>
                                    <Button className={`bg-background_section hover:bg-background_hero text-custom_button hover:text-background_section py-2 px-6`}>Apply</Button>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className={`flex gap-3 items-center`}>
                        <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                            здесь2</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <PlusIcon className={`size-5 cursor-pointer`}/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 space-y-3 bg-border_brown">
                                <div className={`flex space-y-3 items-center justify-between`}>
                                    <Input className={`max-w-[92px] w-full`}/>
                                    <Separator className={`w-8 bg-custom_button`}/>
                                    <Input className={`max-w-[92px] w-full`}/>
                                </div>
                                <div className={`w-full h-[1px] bg-black_text`}></div>
                                <div className={`flex justify-between`}>
                                    <Button className={`bg-background_section hover:bg-background_hero text-custom_button hover:text-background_section py-2 px-6`}>Обнулить</Button>
                                    <Button className={`bg-background_section hover:bg-background_hero text-custom_button hover:text-background_section py-2 px-6`}>Выбрать</Button>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className={`flex gap-3 items-center`}>
                        <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                            здесь3</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <PlusIcon className={`size-5 cursor-pointer`}/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64">
                                <div className={`flex gap-3 items-center`}>
                                    <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                                        здесь</p>
                                    <PlusIcon className={`size-5 cursor-pointer`}/>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className={`flex gap-3 items-center`}>
                        <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                            здесь</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <PlusIcon className={`size-5 cursor-pointer`}/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64">
                                <div className={`flex gap-3 items-center`}>
                                    <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                                        здесь</p>
                                    <PlusIcon className={`size-5 cursor-pointer`}/>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className={`flex gap-3 items-center`}>
                        <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                            здесь</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <PlusIcon className={`size-5 cursor-pointer`}/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64">
                                <div className={`flex gap-3 items-center`}>
                                    <p className={`border-b-2 border-b-border_brown text-xl font-normal text-black_text w-full`}>Текст
                                        здесь</p>
                                    <PlusIcon className={`size-5 cursor-pointer`}/>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}