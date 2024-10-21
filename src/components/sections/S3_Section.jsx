import React, { forwardRef } from "react";

const S3_Section = forwardRef((props,ref) => {
  return (
    <div ref={ref} className="w-1/3 panel translate-x-full h-screen bg-white absolute right-0 top-0 z-[2] p-10 max-[425px]:w-full">
      <h3 className="panelelem text-xl font-[100]">&copy; 2024 Doze.Std</h3>
      <p className="panelelem mt-10 text-xl">
        Sculpting Digital Transforming visions into digital realities. Weaving
        stories that captivate and innovate.Exploring new possibilities with a
        focus on narrative evolution.Crafting solutions that engage and elevate.
      </p>
      <button className="panelelem border-[1px] px-3 py-2 border-[#555] font-[100] mt-6">
        Get Reviews &rarr;
      </button>
      <div className="panelelem absolute bottom-10">
        <h3 className="text-xl">Innovating Design</h3>
        <p className="text-sm mt-3 pr-2">
          Connecting ideas to foster creativity. Designing imapactful
          experiences that resonate.Feel free to mix and match these sections to
          suit your website's design needs!
        </p>
        <button className="bg-black text-white px-7 text-sm mt-4 py-4 font-[100] capitalize">
          experience
        </button>
      </div>
    </div>
  );
});

S3_Section.displayName = 'S3_Section'

export default S3_Section;
