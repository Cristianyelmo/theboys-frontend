"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HomeHook } from "../context/HomessContext";

export default function HomeNew() {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(true);
      const audio2 = new Audio("/sound/metalpunch.mp3");
      audio2.play();
      setStar("block");
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const { handleStart, darkness, start, setStar } = HomeHook();

  return (
    <div>
      {darkness && (
        <div className="fixed inset-0 bg-black z-index my-element8"></div>
      )}
      <section className={`h-screen bg-cover-img  overflow-hidden relative  `}>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] flex justify-center">
        <Image
  src="/imagen/homelander-2.png"
  width={1000}
  height={520}
  className="absolute z-30 my-element2"
/>
<Image
  src="/imagen/homelander-1.webp"
  width={1000}
  height={520}
  className="absolute z-30 my-element"
/>
        <Image
  src="/imagen/homelander-0.webp"
  width={1000}
  height={520}
  className="  z-20"
/>
      
 

        </div>



        <div className="relative flex flex-col  top-[70%] left-[42%] z-50">
        <Image
          src="/imagen/the-boys-logo.webp"
          width={200}
          height={200}
          className={`absolute opacity-0 ${message && "my-element6"}`}
        />
        <Image
          src="/imagen/the-boys-logo-blur.webp"
          width={200}
          height={200}
          className={`absolute opacity-0 ${message && "my-element5"}`}
        />
      </div>

      <div onClick={handleStart} className={`relative cursor-pointer flex flex-col  top-[90%] left-[39%] z-50 ${start} ${start  && 'my-element7'}`}>
        <p className="text-white ">Haz click para comenzar</p>
      </div>
      </section>
    </div>
  );
}

{
  /* <div className="relative flex flex-col  top-[70%] left-[42%] z-50">
        <Image
          src="/imagen/the-boys-logo.webp"
          width={200}
          height={200}
          className={`absolute opacity-0 ${message && "my-element6"}`}
        />
        <Image
          src="/imagen/the-boys-logo-blur.webp"
          width={200}
          height={200}
          className={`absolute opacity-0 ${message && "my-element5"}`}
        />
      </div>

      <div onClick={handleStart} className={`relative cursor-pointer flex flex-col  top-[90%] left-[39%] z-50 ${start} ${start  && 'my-element7'}`}>
        <p className="text-white ">Haz click para comenzar</p>
      </div> */
}



