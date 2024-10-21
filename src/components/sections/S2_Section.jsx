import { forwardRef } from "react";

const S2_Section = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute text-3xl text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] w-1/2 opacity-1 max-[425px]:w-full">
    <h1 className="leading-20 font-[100] uppercase text-6xl max-[425px]:text-5xl max-[425px]:mb-3 max-[425px]:font-light">
      Elevating Aesthetics
    </h1>
    <h1 className="text-xl max-[425px]:text-base max-[425px]:font-normal">
      Crafting solutions and exploring new horizons. Evolving narratives and
      elevating aesthetics in every project.
    </h1>
  </div>
  );
})

S2_Section.displayName = 'S2_Section';

export default S2_Section;