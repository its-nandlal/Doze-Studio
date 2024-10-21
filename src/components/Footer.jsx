import { forwardRef } from "react";

const Footer = forwardRef ((props,ref) => {
  return (
    <div ref={ref}
    className=" absolute bottom-0 left-0 translate-y-full z-[2] w-full h-[55vh] bg-zinc-900  px-10 py-16 flex items-start justify-between opacity-0 max-[425px]:px-4 max-[425px]:py-4">
      <div className="w-fit text-white flex flex-col justify-between gap-5 max-[425px]:gap-3">
        <div className="h-[22vh] flex flex-col gap-3 max-[425px]:h-auto max-[425px]:gap-2">
        <h2 className="text-2xl uppercase font-semibold max-[425px]:text-xl">Project Inquires</h2>

        <p className="text-base leading-[1.3] max-[425px]:text-sm">
        Ready to work with us ?
        <br /> Reach out to discuss how we can help you build a strong 
        <br /> digital brand presence.
        </p>
        
        <a className="text-base font-semibold italic  mt-2">hello@doze-studio.com</a>
        </div>

        <div className="flex flex-col gap-3">
        <h2 className="text-2xl uppercase font-semibold max-[425px]:text-xl">Our Office</h2>
        <span className="block leading-[.5] font-medium max-[425px]:text-sm max-[425px]:leading-[.3]">Doze Studio</span>
        <span className="block leading-[.5] font-medium max-[425px]:text-sm max-[425px]:leading-[.3]">1b rue Baron</span>
        <span className="block leading-[.5] font-medium max-[425px]:text-sm max-[425px]:leading-[.3]">44 000 Nantes</span>
        <span className="block leading-[.5] font-medium max-[425px]:text-sm max-[425px]:leading-[.3]">France</span>
        </div>
      </div>

      <div className="w-fit text-white flex flex-col justify-between gap-5">

        <div className="h-[22vh] flex flex-col items-end gap-20">
        <img src="./stock/logo.png" alt="" />
        <a className="text-xs font-semibold cursor-pointer">Legals</a>
        </div>

        <div className="flex flex-col items-end">
        <h2 className="text-2xl uppercase font-semibold ">Networks</h2>
        <a className="block text-sm font-semibold cursor-pointer">+33 2 85 52 19 62</a>
        <a className="block text-sm font-semibold cursor-pointer">▬</a>
        <a className="block text-sm font-semibold cursor-pointer">Instagram</a>
        <a className="block text-sm font-semibold cursor-pointer">Linkedin</a>
        <a className="block text-sm font-semibold cursor-pointer">Giphy</a>

        </div>

      </div>
    </div>
  );
});

Footer.displayName = 'Footer'

export default Footer;