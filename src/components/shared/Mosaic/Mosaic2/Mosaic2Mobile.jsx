import { cn } from "@/lib/utils";
import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";

export const Mosaic2Mobile = ({ classname }) => {
  return (
    <div className={cn("grid-cols-6 grid-rows-12 gap-1 h-[733px]", classname)}>
      <div className="col-span-4 row-span-2 row-start-1 row-end-4">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/1.png')",
          }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="col-start-5 col-span-2 row-span-2">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/2.png')",
          }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="col-span-4 row-start-4 row-span-2">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/3.png')",
          }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="col-start-5 col-span-2 row-start-3 row-span-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/4.png')",
          }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="col-span-6 row-start-6 row-span-4">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/5.png')",
          }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="col-span-3 row-start-10 row-span-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/6.png')",
          }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
      <div className="col-start-4 col-span-3 row-start-10 row-span-3">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/7.png')",
          }}
        >
          <TextOnHover isMobile={true} />
        </div>
      </div>
    </div>
  );
};
