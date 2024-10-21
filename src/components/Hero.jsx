import { forwardRef } from "react"

const Hero = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute text-3xl text-white bottom-10 left-10 z-[2] w-1/2 max-[425px]:text-xl max-[425px]:w-[100%] max-[425px]:left-4">
    <h1 className="leading-20 font-[100]">&copy; 2024 DOZE STD</h1>
    <h1>SHAPING BRANDS → CRAFTING MOTION</h1>
  </div>
  )
})

Hero.displayName = 'Hero'

export default Hero