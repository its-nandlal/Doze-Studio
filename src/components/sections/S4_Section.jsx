import { forwardRef } from "react";

const S4_Section = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute z-[2] text-white top-1/2 left-1/2 -translate-x-1/2 w-full text-center text-6xl tracking-tighter opacity-1 max-[425px]:w-full ">
      &copy;Panelism
      <span className="line w-10 h-1 bg-white inline-block"></span>2024
    </div>
  );
});

S4_Section.displayName = "S4_Section";

export default S4_Section;
