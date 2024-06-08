import { Mosaic2Desktop } from "@/components/shared/Mosaic/Mosaic2/Mosaic2Desktop";
import { Mosaic2Mobile } from "@/components/shared/Mosaic/Mosaic2/Mosaic2Mobile";

export const Mosaic2 = ({ title }) => {
  return (
    <section
      className={`bg-background_section w-full border border-y-border_brown py-5`}
    >
      <div className={`container h-full`}>
        <h3
          className={`uppercase text-body3 md:text-h4 font-normal md:font-bold text-button mb-5`}
        >
          {title}
        </h3>
        <Mosaic2Desktop classname={"hidden md:grid"} />
        <Mosaic2Mobile classname={"grid md:hidden"} />
      </div>
    </section>
  );
};
