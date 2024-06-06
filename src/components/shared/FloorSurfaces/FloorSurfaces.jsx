import { TextOnHover } from "../TextOnHover/TextOnHover";

export const FloorSurfaces = ({title}) => {
    return (
        <section className={`bg-background_section border border-b-border_brown border-t-border_brown py-5`}>
            <div className={`container`}>
                <h4 className={`text-[32px] uppercase mb-5`}>{title}</h4>
                <div className={`grid grid-cols-12 gap-4 h-[820px]`}>
                    <div className={`col-span-4 grid grid-rows-3 gap-4`}>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/1.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/2.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/3.png')"}}>
                            <TextOnHover />
                        </div>
                    </div>
                    <div className={`col-span-2 grid grid-rows-3 gap-4`}>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/4.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/5.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/6.png')"}}>
                            <TextOnHover />
                        </div>
                    </div>
                    <div className={`col-span-6 grid grid-rows-3 gap-4`}>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/7.png')"}}>
                            <TextOnHover />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/8.png')"}}>
                                <TextOnHover />
                            </div>
                            <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/9.png')"}}>
                                <TextOnHover />
                            </div>
                        </div>
                        <div className="bg-cover bg-center relative" style={{backgroundImage: "url('/floorsurfacesImg/10.png')"}}>
                            <TextOnHover />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
