import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import { cn } from "@/lib/utils";

export const Mosaic1Mobile = ({ classname }) => {
  return (
    <div className={cn("grid-cols-5 grid-rows-8 gap-1 h-[780px]", classname)}>
      <div className="div1 col-start-1 col-end-4 row-start-1 row-end-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/1.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div2 col-start-4 col-end-6 row-start-1 row-end-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/2.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div3 col-start-1 col-end-4 row-start-3 row-end-4">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/3.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div4 col-start-4 col-end-6 row-start-3 row-end-4">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/4.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div5 col-start-1 col-end-4 row-start-4 row-end-5">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/5.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div6 col-start-4 col-end-6 row-start-4 row-end-5">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/6.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div7 col-start-1 col-end-6 row-start-5 row-end-6">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/7.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div8 col-start-1 col-end-3 row-start-6 row-end-7">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/8.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div9 col-start-3 col-end-6 row-start-6 row-end-7">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/9.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="div10 col-start-1 col-end-6 row-start-7 row-end-9">
        <div
          className="bg-cover bg-center relative size-full"
          style={{ backgroundImage: "url('/floorsurfacesImg/10.png')" }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
    </div>
  );
};
