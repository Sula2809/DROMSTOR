"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/shared/Swiper/SwiperArrows";
import { useCallback, useState } from "react";

const swiperImg = [
  {
    id: "3df42fd32g",
    img: "/cart/1.2.png",
  },
  {
    id: "3df42fsa2g",
    img: "/cart/1.3.png",
  },
  {
    id: "3bb42fd32g",
    img: "/cart/1.4.png",
  },
  {
    id: "3dpD2fd32g",
    img: "/cart/1.1.png",
  },
];

export const Swiper = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play;
    playOrStop();
  }, [emblaApi]);

  return (
    <div className="overflow-hidden mt-1" ref={emblaRef}>
      <div className={`flex touch-pan-y`}>
        {swiperImg.map((item) => (
          <div
            key={item.id}
            className="relative w-full max-w-[1920px] max-h-[970px] flex-shrink-0"
          >
            <div
              className="relative w-full h-0"
              style={{ paddingBottom: "52.5%" }}
            >
              <Image
                src={item.img}
                alt={item.img}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
      {/*<div className="embla__controls">*/}
      {/*  <div className="embla__buttons">*/}
      {/*    <PrevButton*/}
      {/*      onClick={() => onButtonAutoplayClick(onPrevButtonClick)}*/}
      {/*      disabled={prevBtnDisabled}*/}
      {/*    />*/}
      {/*    <NextButton*/}
      {/*      onClick={() => onButtonAutoplayClick(onNextButtonClick)}*/}
      {/*      disabled={nextBtnDisabled}*/}
      {/*    />*/}
      {/*  </div>*/}

      {/*  <button className="embla__play" onClick={toggleAutoplay} type="button">*/}
      {/*    {isPlaying ? "Stop" : "Start"}*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
    // <Carousel
    //   className="relative mt-1"
    //   opts={{ loop: true, Autoplay: { delay: 3000 } }}
    // >
    //   <CarouselContent className="flex">
    //     {swiperImg.map((item) => (
    //       <CarouselItem
    //         key={item.id}
    //         className="relative w-full max-w-[1920px] max-h-[970px] flex-shrink-0"
    //       >
    //         <div
    //           className="relative w-full h-0"
    //           style={{ paddingBottom: "52.5%" }}
    //         >
    //           <Image
    //             src={item.img}
    //             alt={item.img}
    //             fill
    //             className="object-cover object-center"
    //           />
    //         </div>
    //       </CarouselItem>
    //     ))}
    //   </CarouselContent>
    //   <CarouselPrevious
    //     className="bg-grayish absolute top-1/2 left-0 transform -translate-y-1/2 md:left-10 rounded-none border-none"
    //     isBlack={true}
    //   />
    //   <CarouselNext
    //     className="bg-grayish absolute top-1/2 right-0 transform -translate-y-1/2 md:right-10 rounded-none border-none"
    //     isBlack={true}
    //   />
    // </Carousel>
  );
};
