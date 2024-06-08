import { Mosaic1Desktop } from "@/components/shared/Mosaic/Mosaic1/Mosaic1Desktop";
import { Mosaic1Mobile } from "@/components/shared/Mosaic/Mosaic1/Mosaic1Mobile";

export const Mosaic1 = ({ title }) => {
  return (
    <section
      className={`bg-background_section border border-b-border_brown border-t-border_brown py-5`}
    >
      <div className={`container`}>
        <h4
          className={`text-body3 text-button md:text-h4 font-normal md:font-bold uppercase mb-5`}
        >
          {title}
        </h4>
        <Mosaic1Desktop classname={"hidden md:grid"} />
        <Mosaic1Mobile classname={`grid md:hidden`} />
      </div>
    </section>
  );
};
