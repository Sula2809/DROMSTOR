import {useTranslations} from "next-intl";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import data from "./recomendationCarousel.json";
import Image from "next/image";
import {TextOnHover} from "@/components/shared/TextOnHover/TextOnHover";

export const Recomendations = () => {
    const t = useTranslations()
    return (
        <section className={`py-10 lg:py-20 px-10 h-full`}>
            <div className={`container`}>
                <h4 className={`uppercase text-xl md:text-2xl lg:text-[32px] w-full mb-10`}>{t('recomendations')}</h4>
                <Carousel className="mx-auto w-full " opts={{loop: true, infinite: true, slidesToShow: 5, slidesToScroll: 1}}>
                    <CarouselContent className="gap-4 md:gap-7">
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="pl-5 basis-1/5">
                                <div className={`px-10 relative cursor-pointer overflow-hidden`}>
                                    <div className={`hover:scale-105 duration-200">`}>
                                        <Image className={`size-full`} width={308} height={308} src={item.img} alt="img"/>
                                        <TextOnHover/>

                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center absolute right-10 top-[-60px]">
                        <CarouselPrevious className="text-black bg-button rounded-none hover:bg-border_brown "/>
                        <CarouselNext className="text-black bg-button rounded-none hover:bg-border_brown"/>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}