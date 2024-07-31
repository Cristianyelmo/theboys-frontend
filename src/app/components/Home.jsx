"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HomeHook } from "../context/HomessContext";

export default function HomeNew() {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(true);
      const audio2 = new Audio('/sound/metalpunch.mp3');
      audio2.play();
      setStar('block')
    }, 2800);
    return () => clearTimeout(timer);
  }, []);
  const draggableRef = useRef(null);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", null); // Requerido para Firefox
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necesario para permitir soltar
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const offsetX = e.clientX - draggableRef.current.clientWidth / 2;
    const offsetY = e.clientY - draggableRef.current.clientHeight / 2;

    draggableRef.current.style.left = `${offsetX}px`;
    draggableRef.current.style.top = `${offsetY}px`;
  };



  
const { 
  handleStart,darkness,start,setStar}= HomeHook()

  

  return (
    <div>
      { darkness &&  <div className="fixed inset-0 bg-black z-index my-element8"></div>} 
    <section
 
      className={`h-screen bg-cover-img  overflow-hidden `}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="relative bottom-0 flex justify-center top-[14%]">
        <Image
          src="/imagen/homelander-2.png"
          width={1000}
          height={520}
          className="absolute  z-30 my-element2 "
        />
        <Image
          src="/imagen/homelander-1.png"
          width={1000}
          height={520}
          className="absolute  z-30 my-element"
        />
        <Image
          src="/imagen/homelander-0.png"
          width={1000}
          height={520}
          className="absolute z-20 "
        />
        <Image
          src="/imagen/homelander-4.png"
          width={1000}
          height={520}
          className="absolute z-10 my-element3"
        />
        <Image
          src="/imagen/homelander-3.png"
          width={1000}
          height={520}
          className="absolute z-10 my-element4"
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

      <div onClick={handleStart} className={`relative cursor-pointer flex flex-col  top-[90%] left-[42%] z-50 ${start} ${start  && 'my-element7'}`}>
        <p className="text-white">Haz click para comenzar</p>
      </div>

      <div
        ref={draggableRef}
        className="absolute top-[50%] left-[20%] z-50 cursor-move"
        draggable="true"
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Image
          src="/imagen/butcher-0.webp"
          width={300}
          height={300}
          alt="Imagen arrastrable"
          className=""
        />
      </div>
    </section>
    </div>
  );
}
