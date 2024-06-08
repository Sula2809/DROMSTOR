import { TextOnHover } from "@/components/shared/TextOnHover/TextOnHover";
import { cn } from "@/lib/utils";

export const Mosaic2Desktop = ({ classname }) => {
  return (
    <div className={cn(`grid-cols-12 gap-5 mt-7 h-[830px]`, classname)}>
      <div className="col-span-4 grid grid-rows-2 gap-5">
        <div
          className="bg-cover bg-center relative size-full"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/1.png')",
          }}
        >
          <TextOnHover />
        </div>
        <div
          className="bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/2.png')",
          }}
        >
          <TextOnHover />
        </div>
      </div>
      <div className="col-span-2 grid grid-rows-2 gap-5">
        <div
          className="row-span-1 bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/3.png')",
          }}
        >
          <TextOnHover />
        </div>
        <div
          className="row-span-1 bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/4.png')",
          }}
        >
          <TextOnHover />
        </div>
      </div>
      <div className="col-span-6 grid grid-rows-2 gap-5">
        <div
          className="row-span-1 bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/sectionImages/wallPans/5.png')",
          }}
        >
          <TextOnHover />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div
            className="bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/sectionImages/wallPans/6.png')",
            }}
          >
            <TextOnHover />
          </div>
          <div
            className="bg-cover bg-center relative"
            style={{
              backgroundImage: "url('/sectionImages/wallPans/7.png')",
            }}
          >
            <TextOnHover />
          </div>
        </div>
      </div>
    </div>
  );
};
