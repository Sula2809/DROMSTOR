import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { PopularContent } from "@/components/shared/Popular/PopularContent";

export const Popular = () => {
  return (
    <section className="p-2 lg:py-10">
      <div className="container">
        <h4 className="uppercase text-body3 text-button md:text-h4 font-normal md:font-bold w-full mb-3 md:mb-10">
          Популярное
        </h4>
        <Carousel
          className="mx-auto w-[100%]"
          opts={{
            loop: true,
          }}
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <PopularContent />
          <div className="flex justify-center absolute gap-0 right-10 md:top-[-60px] -top-5">
            <CarouselPrevious
              className="text-black bg-button hover:bg-button-hover size-4 md:size-8"
              isBlack={false}
            />
            <CarouselNext
              className="text-black bg-button hover:bg-button-hover size-4 md:size-8"
              isBlack={false}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
