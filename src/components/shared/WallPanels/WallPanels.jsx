import { TextOnHover } from "../TextOnHover/TextOnHover"

export const WallPanels = ({title}) => {
    return (
        <section className={`wallpanels bg-background_section size-full py-4 border border-y-border_brown`}>
            <div className={`container h-full`}>
                <h3 className={`uppercase text-4xl font-normal text-black_text`}>{title}</h3>
                <div className="grid grid-cols-12 gap-5 mt-7 h-[830px]">
                    <div className="col-span-4 grid grid-rows-2 gap-5">
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/sectionImages/wallPans/1.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/sectionImages/wallPans/2.png')"}}>
                            <TextOnHover />
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-rows-2 gap-5">
                        <div className="row-span-1 bg-cover bg-center relative" style={{backgroundImage: "url('/sectionImages/wallPans/3.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="row-span-1 bg-cover bg-center relative" style={{backgroundImage: "url('/sectionImages/wallPans/4.png')"}}>
                            <TextOnHover />
                        </div>
                    </div>
                    <div className="col-span-6 grid grid-rows-2 gap-5">
                        <div className="row-span-1 bg-cover bg-center relative" style={{backgroundImage: "url('/sectionImages/wallPans/5.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/sectionImages/wallPans/6.png')"}}>
                                <TextOnHover />
                            </div>
                            <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/sectionImages/wallPans/7.png')"}}>
                                <TextOnHover />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
