"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HomeHook } from "../context/HomessContext";

export default function Characterchoice() {
  
  const[valueclass,setValueclass]=useState('my-element9 bg-black')
  const { 
    handleStart,darkness, setChangepage, characterselected ,setCharacterSelected,
    valueImage,setValueImage}= HomeHook()
  useEffect(() => {
   
   /*  const audio2 = new Audio('/sound/mk.mp3');
    audio2.play(); */
      const timer = setTimeout(() => {
       setValueclass('hidden')
       
      }, 1000);
      return () => clearTimeout(timer);
    
  }, []);
  


  const[thunder,setThunder]=useState(false)
const[blockselected,setBlockselected]=useState(false)
const handleSelectedCharacter = (id) => {
if(blockselected === false){
  setValueImage(id)
  const select = characterselected.map((item) => {
    if (item.id == id) {
      return { ...item, selected: true };
    } else {
      return { ...item, selected: false };
    }
  });

  setCharacterSelected(select);
  const audio2 = new Audio('/sound/metalpunch.mp3');
      audio2.play();
    }
};

const[animationboolean,setAnimationboolean]=useState(false)
const[hidebuttonselect,setHidebuttonselect]=useState('')
const handleSelectedCharacterAnimation = (id) => {
  setAnimationboolean(true)
  setBlockselected(true)
  setHidebuttonselect('opacity-0')
  const valueselected = characterselected[id]
  const audio = new Audio(`/sound/${valueselected.audio}.mp3`);
  audio.play();
setValueclass(valueselected.animationbackground)
if(valueselected.name == 'Stormfront'){
  setThunder(true)
}

  const timer = setTimeout(() => {
    setValueclass('my-element8 block bg-black ')
    
   }, valueselected.timechangepage);

   const timer2 = setTimeout(() => {
    setChangepage('DetailSelected')
    
   }, valueselected.timechangepage + 1000);
   return () => clearTimeout(timer,timer2);


};


  console.log(characterselected)
  return (
    
    <div>







     <div className={`fixed inset-0  z-index ${valueclass}`}>
     

    </div>  
    <div className=" bg-cover-img p-3 lg:flex lg:justify-center ">
    {/* <Image src={`/imagen/thunder.png`} width={100} height={100} className={`${thunder && 'my-element12'} opacity-0  `}/> */}
      <div className="flex flex-col lg:flex-row lg:space-x-10  justify-center items-center">
       
       <div className="flex flex-col items-center">

      
<div className="w-[300px] h-[300px] border-[3px] border-white overflow-hidden relative">
  <Image src={`/imagen/thunder.png`} width={100} height={100} className={`${thunder && 'my-element12'} opacity-0 absolute z-40 `}/>
  <Image
    src={`/CharacterSelected/${characterselected[valueImage].name}1.webp`}
    width={480}
    height={200}
    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30   ${characterselected[valueImage].additionalanimationclick}   ${animationboolean && characterselected[valueImage].animationclick }  `}
  />

<Image
    src={`/CharacterSelected/${characterselected[valueImage].name}2.webp`}
    width={480}
    height={200}
    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 ${animationboolean && characterselected[valueImage].animationclick + '2'}    `}
  />
  <Image
    src={`/imagen/Fondo.webp`}
    width={1000}
    height={1000}
    className="absolute  z-10 bottom-0 w-full h-full "
  />
</div>
<p className="text-white text-3xl text-center mt-2">{characterselected[valueImage].name}</p>

</div>
<div className="flex flex-col items-center space-y-2">
      <div className="grid grid-cols-4 gap-2  p-2 bg-black border-[3px] border-white ">
      {
        characterselected.map((item,index)=>(
          <div className="" onClick={()=>handleSelectedCharacter(item.id)} key={index}>
            <Image src={`/CharacterSelected/${item.name}.webp`} width={100} height={100} className={`${item.selected == true && 'border-[#2c8504] border-[4px]'} `}/>
          </div> 

        ))
      }
      </div>
      <button disabled={hidebuttonselect == 'opacity-0' && true} className={`${hidebuttonselect} text-white text-2xl text-center bg-black p-4 `} onClick={()=>handleSelectedCharacterAnimation(valueImage)}>Seleccionar</button> 
      </div>
     
 

    
      </div>

    </div>
    </div>
  );
}