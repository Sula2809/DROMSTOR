import data from './data.json'
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Image from "next/image";
import {TextOnHover} from "@/components/shared/TextOnHover/TextOnHover";
export const DecorativeWallPans = () => {
    return (
        <section className={`py-10`}>
            <div className={`container`}>
                <h4 className={`text-[32px] uppercase mb-5`}>популярное</h4>
                <Carousel className="w-[90%] mx-auto">
                    <CarouselContent className="gap-8">
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                <div className={`px-10 relative cursor-pointer overflow-hidden`}>
                                    <div className={`hover:scale-105 duration-200">`}>
                                        <Image width={456} height={456} className={`size-full`} src={item.img} alt="img"/>
                                        <TextOnHover/>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious
                        className={`bg-background_section hover:bg-border_brown text-black border-none rounded-none`} isBlack={true}/>
                    <CarouselNext className={`bg-background_section hover:bg-border_brown text-black border-none rounded-none`} isBlack={true}/>
                </Carousel>
            </div>
        </section>
    )
}