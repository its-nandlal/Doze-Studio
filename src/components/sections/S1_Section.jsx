import { forwardRef } from "react";

 const S1_Section = forwardRef ((props, ref) => {
  return (
    <div ref={ref} className="animate2 absolute text-3xl text-white text-right bottom-10 right-10 z-[2] w-1/2 flex opacity-1 max-[1024px]:w-[80%] max-[425px]:flex-col max-[425px]:items-center max-[425px]:justify-center max-[425px]:w-full max-[425px]:h-screen max-[425px]:left-0">
      <h1 className="leading-20 font-[100] uppercase text-6xl max-[425px]:text-4xl max-[425px]:font-light max-[425px]:text-center">
        Transforming Visions
      </h1>
      <h1 className="text-xl w-1/2 mt-1 max-[425px]:w-[100%] max-[425px]:text-center max-[425px]:text-base">
        Building identity and inspiring action. Sculpting digital experiences
        that resonate deeply with users.
      </h1>
    </div>
  );
})

S1_Section.displayName = 'S1_Section'

export default S1_Section;