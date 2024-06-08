import data from "./data.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import Autoplay from "embla-carousel-autoplay";
export const DecorativeWallPans = () => {
  return (
    <section className={`py-10`}>
      <div className={`container`}>
        <h4
          className={` text-body3 md:text-h4 text-button font-bold uppercase mb-5`}
        >
          популярное
        </h4>
        <Carousel
          className="w-[95%] mx-auto "
          plugins={[Autoplay({ delay: 3000 })]}
          opts={{ loop: true }}
        >
          <CarouselContent className="gap-0 sm:gap-4 md:gap-6 lg:gap-8">
            {data.map((item, index) => (
              <CarouselItem key={index} className=" pl-1 md:pl-20 basis-1/3">
                <div
                  className={`relative cursor-pointer overflow-hidden max-w-[100px] max-h-[100px] sm:max-w-[200px] sm:max-h-[200px] md:max-w-[456px] md:max-h-[456px]`}
                >
                  <img
                    className={`size-full object-fit`}
                    src={item.img}
                    alt="img"
                  />
                  <TextOnHover isMobile={true} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={`hidden md:flex bg-button hover:bg-button-hover text-black border-none justify-center size-7`}
            isBlack={false}
          />
          <CarouselNext
            className={`hidden md:flex bg-button hover:bg-button-hover text-black border-none justify-center size-7`}
            isBlack={false}
          />
        </Carousel>
      </div>
    </section>
  );
};
