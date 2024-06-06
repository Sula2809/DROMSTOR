import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

export const Swiper = () => {
    return (
            <Carousel className="size-full md:mt-[-10px]" opts={{loop: true}}>
                <CarouselContent className={`w-full`}>
                    <CarouselItem className={`p-0 w-full`}>
                        <img src="./carouselImg/First-slide.png" alt="slider photo" className="size-full"/>
                    </CarouselItem>

                    <CarouselItem className={`p-0`}>
                        <img src="./carouselImg/Second-slide.png" alt="slider photo" className="size-full"/>
                    </CarouselItem>

                    <CarouselItem className={`p-0`}>
                        <img src="./carouselImg/Third-slide.png" alt="slider photo" className="size-full"/>
                    </CarouselItem>
                </CarouselContent>
                    <CarouselPrevious className={`bg-grayish absolute top-[50%] md:left-10 rounded-none border-none`} isBlack='true'/>
                    <CarouselNext className={`bg-grayish absolute top-[50%] md:right-10 rounded-none border-none`} isBlack='true'/>
            </Carousel>
    )
}