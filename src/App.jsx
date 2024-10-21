import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Canvas from "./components/Canvas";
import S1Hero from "./components/Hero";
import S1section from "./components/sections/S1_Section";
import S2_Section from "./components/sections/S2_Section";
import S3_Section from "./components/sections/S3_Section";
import S4_Section from "./components/sections/S4_Section";
import Footer from "./components/Footer";
import NaveGate from "./components/NaveGate";
import Lenis from 'lenis'

export default function App() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const canvasRef = useRef(null);
  const parentRef = useRef(null);
  const navegateRef = useRef(null);

  const animate1Ref = useRef(null);
  const animate2Ref = useRef(null);
  const animate3Ref = useRef(null);
  const animate4Ref = useRef(null);
  const animate5Ref = useRef(null);
  const animate6Ref = useRef(null);

  const loadedImages = useRef(0);
  const images = useRef([]);

  const [frame, setFrame] = useState({
    currentIndex: 1,
    maxIndex: 538,
  });

  useEffect(() => {      

    preloadImage();
  }, [frame.maxIndex]);

  const preloadImage = () => {
    for (let i = 1; i <= frame.maxIndex; i++) {
      const img = new Image();
      img.src = `./frames/frame_${i.toString().padStart(4, "0")}.jpeg`;
      img.onload = () =>
        ++loadedImages.current === frame.maxIndex &&
        loadImage(frame.currentIndex);
      images.current[i] = img;
    }
  };

  const loadImage = (index) => {
    if (index >= 0 && index <= frame.maxIndex) {
      const img = images.current[index];

      const canvas = canvasRef.current,
        context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const [scaleX, scaleY] = [
        canvas.width / img.width,
        canvas.height / img.height,
      ];
      const scale = Math.max(scaleX, scaleY);

      const [newWidth, newHeight] = [img.width * scale, img.height * scale];
      const [offsetX, offsetY] = [
        (canvas.width - newWidth) / 2,
        (canvas.height - newHeight) / 2,
      ];

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(img, offsetX, offsetY, newWidth, newHeight);
      setFrame((per) => ({ ...per, currentIndex: index }));
    }
  };

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {

    window.addEventListener("wheel", (e)=>{
      if(e.deltaY > 0){
        gsap.to(navegateRef.current,{y: '-110%', ease: "power4", duration: 1.5})
      }
      else if(e.deltaY < 0){
        gsap.to(navegateRef.current,{y: '0%', ease: "power4", duration: 1.5})
      }
      
    })

    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          markers: false,
        },
      })

      function updateFrame (index) {
        return {
          currentIndex: index,
          ease: "linear",
          onUpdate: function () {
            loadImage(Math.floor(frame.currentIndex), "anm1");
          },
        }
      }

      tl
      .to(frame, updateFrame(50), "anm1In")
      .to(animate1Ref.current, {opacity: 0, scale: .9, ease: "linear"}, "anm1In")

      .to(frame, updateFrame(80), "anm2In")
      .from(animate2Ref.current, {y: "-30%", opacity: 0, scale: .8, ease: "linear"}, "anm2In")

      .to(frame, updateFrame(110), "anm2Out")
      .to(animate2Ref.current, {y: "-30%", opacity: 0, scale: .8, ease: "linear"}, "anm2Out")

      .to(frame, updateFrame(140), "anm3In")
      .from(animate3Ref.current, {opacity: 0, scale: .8, ease: "linear"}, "anm3In")

      .to(frame, updateFrame(170))

      .to(frame, updateFrame(200), "anm3out")
      .to(animate3Ref.current, {opacity: 0, scale: .99, ease: "linear"}, "anm3out")


      .to(frame, updateFrame(230))
      
      .to(frame, updateFrame(260), "panelin")
      .to(animate4Ref.current, {x: "0%", ease: "expo.inOut"}, "panelin")

      .to(frame, updateFrame(290))

      .to(frame, updateFrame(320),"panelOut")
      .to(animate4Ref.current, {opacity: 0, ease: "linear"}, "panelOut")

      if(window.innerWidth  <= 425){
        tl
        .to(frame, updateFrame(350), "canvas")
        .to(canvasRef.current, {scale: .8, ease: "linear"}, "canvas")
  
        .to(frame, updateFrame(380), "panelismIn")
        .from(animate5Ref.current, {opacity: 0, scale: .6, ease: "linear"}, "panelismIn")
  
        .to(frame, updateFrame(410), "panelismChildIn")
        .to(animate5Ref.current.querySelector('span'), {width: 150, marginLeft: "1rem", ease: "expo.inOut"}, "panelismChildIn")
  
        .to(frame, updateFrame(440), "canvass")
        .to(canvasRef.current, {scale: 1, ease: "linear"}, "canvass")
  
        .to(frame, updateFrame(480), "panelismIn2")
        .to(animate5Ref.current, { y: "-30vh", scale: 1, ease: "circ.inOut"}, "panelismIn2")
  
        .to(frame, updateFrame(510))

        .to(frame, updateFrame(537),"footer")
        .to(animate6Ref.current, {y: "0%", opacity:1, ease: "expo"},"footer")

        console.log("okkk");
        
        
      }
      else{
      tl
      .to(frame, updateFrame(350), "canvas")
      .to(canvasRef.current, {scale: .6, ease: "linear"}, "canvas")

      .to(frame, updateFrame(380), "panelismIn")
      .from(animate5Ref.current, {opacity: 0, scale: .5, ease: "linear"}, "panelismIn")

      .to(frame, updateFrame(410), "panelismChildIn")
      .to(animate5Ref.current.querySelector('span'), {width: 170, ease: "expo.inOut"}, "panelismChildIn")

      .to(frame, updateFrame(440), "canvass")
      .to(canvasRef.current, {scale: 1, ease: "linear"}, "canvass")

      .to(frame, updateFrame(480), "panelismIn2")
      .to(animate5Ref.current, { y: "-25vh", scale: 1.6, ease: "circ.inOut"}, "panelismIn2")

      .to(frame, updateFrame(537),"footer")
      .to(animate6Ref.current, {y: "0%", opacity:1, ease: "expo"},"footer")

      console.log("ok1");
      
      }

      

  });

  return (
    <main className=" w-full bg-zinc-200">

      <div ref={parentRef} className=" relative w-full h-[1400vh]">

        <div className=" sticky top-0 left-0 w-full h-screen overflow-hidden">
          <Canvas ref={canvasRef} />

          <NaveGate ref={navegateRef} />

          <S1Hero ref={animate1Ref} />

          <S1section ref={animate2Ref} />

          <S2_Section ref={animate3Ref} />

          <S3_Section ref={animate4Ref} />

          <S4_Section ref={animate5Ref} />

          <Footer ref={animate6Ref} />
          
        </div>

      </div>

    </main>
  );
}
