"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { GetMainImages } from "@/shared/services/HomepageSwiperImages/mainImages";

export const Swiper = () => {
  const [swiperData, setSwiperData] = useState([]);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const fetchSwiperData = async () => {
    const res = await GetMainImages();
    if (res) {
      setSwiperData(res.data);
    }
  };

  useEffect(() => {
    fetchSwiperData().then((res) => console.log("success"));
  }, []);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{ loop: true }}
    >
      <CarouselContent className={`max-w-[1920px] mx-auto`}>
        {swiperData?.map((item, index) => (
          <CarouselItem key={index} className={`max-h-[1000px]`}>
            <img src={item.image} alt={item.id} className={`size-full`} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
