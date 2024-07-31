"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HomeHook } from "../context/HomessContext";

export default function DetailCharacter() {
  const {setChangepage} =HomeHook()
    const[valueclass,setValueclass]=useState('my-element9 block')
    const[valueImage,setValueImage]=useState(0)
    useEffect(() => {
     
     /*  const audio2 = new Audio('/sound/mk.mp3');
      audio2.play(); */
        const timer = setTimeout(() => {
         setValueclass('hidden')
         
        }, 1000);
        return () => clearTimeout(timer);
      
    }, []);
  return (
    
    <div>

<div className={`fixed inset-0 bg-black z-index ${valueclass}`}>
     

    </div> 
    <div>
        holaaaaaa
    </div>
    <button onClick={()=>setChangepage('CharacterSelected')}>
      volver
   
    </button>
    </div>
  );
}