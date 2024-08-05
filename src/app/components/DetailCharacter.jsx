"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HomeHook } from "../context/HomessContext";
import localFont from "next/font/local";
const TheboysFonts = localFont({
  src: [
    {
      path: "../../../public/fonts/Marvelo.ttf",
     
   
    },
   
  ],
});
export default function DetailCharacter() {
  const {setChangepage,characterselected,valueImage} =HomeHook()
    const[valueclass,setValueclass]=useState('my-element9 block')
 
    useEffect(() => {
     
     /*  const audio2 = new Audio('/sound/mk.mp3');
      audio2.play(); */
        const timer = setTimeout(() => {
         setValueclass('hidden')
         
        }, 1000);
        return () => clearTimeout(timer);
      
    }, [characterselected]);


const [choiceseriesandcomic,setChoiceseriesandcomic] = useState('serie')


const[objectanimationserieandcomic,setObjectanimationserieandcomic]=useState({
  animation1:'',
   animation2:'',
    animation3:'',
     animation4:''
})
const[textchange,setTextChange]=useState('textserie')
const[animatefont,setAninamefont]=useState({
  font1:'',
  font2:'opacity-0'
})
const handleChangecomicandserie = (value)=>{
  setChoiceseriesandcomic(value)
  const audio2 = new Audio('/sound/glith.mp3');
      audio2.play();
      if(value == 'comic'){
        setAninamefont({
          font1:'fontanimate',
          font2:'fontanimatered'
        })
        setTextChange('textcomic')
setObjectanimationserieandcomic({
  animation1:'toggleserieandcomic1',
   animation2:'toggleserieandcomic2',
    animation3:'toggleserieandcomic3',
     animation4:'toggleserieandcomic4'
})
} else{
  setAninamefont({
    font1:'fontanimate2',
    font2:'fontanimatered2'
  })
  setTextChange('textserie')
  setObjectanimationserieandcomic({
    animation1:'toggleserieandcomic4',
     animation2:'toggleserieandcomic3',
      animation3:'toggleserieandcomic2',
       animation4:'toggleserieandcomic1'
  })
}


}

  return (
    
    <div className="bg-cover-img">

<div className={`fixed inset-0 bg-black z-index ${valueclass}`}>
     

    </div> 
    <div className=" overflow-hidden ">
    <button onClick={()=>setChangepage('CharacterSelected')} className="bg-black p-2 m-2 text-white">
      volver
   
    </button>
<div className="space-x-2 flex justify-center z-30 relative">
  <button onClick={()=>handleChangecomicandserie('serie')} className={`${choiceseriesandcomic === 'serie' && 'bg-black'} text-white border-[1px] border-white  p-4 text-2xl`} >serie</button>
  <button onClick={()=>handleChangecomicandserie('comic')} className={`${choiceseriesandcomic === 'comic' && 'bg-black'} text-white border-[1px] border-white p-4 text-2xl`} >comic</button>
</div>


<div className="flex flex-col ">
<div className="position-detail-character   flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:-translate-x-0 overflow-hidden overflow-x-hidden overflow-y-hidden">
<div className="relative  ">
<Image src={`/DetailSelected/${characterselected[valueImage].name}4.webp`} width={1200} height={800} className={`absolute   opacity-0  ${objectanimationserieandcomic.animation4}`}/>
<Image src={`/DetailSelected/${characterselected[valueImage].name}3.webp`} width={1200} height={800} className={`absolute  opacity-0 ${objectanimationserieandcomic.animation3}`}/>
<Image src={`/DetailSelected/${characterselected[valueImage].name}2.webp`} width={1200} height={800} className={`absolute  opacity-0 ${objectanimationserieandcomic.animation2}`}/>
<Image src={`/DetailSelected/${characterselected[valueImage].name}_1.webp`} width={1200} height={800} className={`   ${objectanimationserieandcomic.animation1}`}/>
</div>
</div>
 
<div className="lg:px-10 p-2 space-y-10 flex flex-col items-center lg:items-start">
<div className="relative  ">
<p className="text-white text-4xl lg:text-6xl fontanimationx">{characterselected[valueImage].name}</p>
<p className="text-white text-4xl lg:text-6xl fontanimationx2">{characterselected[valueImage].name}</p>
<p className="text-white text-4xl lg:text-6xl text-outline relative bottom-0 left-0 z-30 fontanimationx3">{characterselected[valueImage].name}</p>

<Image src="/imagen/bloodanimation.webp"  width={200} height={700} className="absolute bottom-0 right-0 bloodanimation z-10"/>
<Image src="/imagen/bloodanimation2.webp"  width={200} height={700} className="absolute bottom-0 right-0 bloodanimation2 z-30"/>
<Image src="/imagen/bloodanimation3.webp"  width={200} height={700} className="absolute bottom-0 right-0 bloodanimation2 z-30"/>
</div>
<div className={`${animatefont.font1} relative`}>
{ <p className={`text-white  text-4xl lg:w-[50%] absolute    ${TheboysFonts.className}`}>{characterselected[valueImage][textchange]}</p> }
<p className={`text-[#d00303] ${animatefont.font2} mr-5 absolute  text-4xl lg:w-[50%]    ${TheboysFonts.className}`}>{characterselected[valueImage][textchange]}
</p>


<p className={`text-[#04c1ff] ${animatefont.font2} ml-5  text-4xl lg:w-[50%]    ${TheboysFonts.className}`}>{characterselected[valueImage][textchange]}
</p>
</div>
</div>
</div>



 














</div>

    </div>
  );
}



{/* <Image src={`/imagen/blood3.webp`} width={800} height={800} className={`absolute `}/> */}
{/* <div>
<p className="text-white text-sm w-[40%]">Homelander es el mejor de los superhéroes existentes y el líder de The Seven. Además de volar, tiene una fuerza sobrehumana y un oído portentoso. Su visión de rayos X puede traspasar prácticamente cualquier material y destruirlo con la precisión de un láser. Aparentemente es una persona amable, sincera y modesta, siempre dispuesto a ayudar, todo un patriota norteamericano temeroso de Dios. Pero al igual que los simples mortales, los superhéroes tienen secretos, pero en el caso de Homelander, son demasiado oscuros. Estos secretos, lo terminan enfrentando con Billy Butcher.</p>
<div>
<p className="text-white text-4xl">Homelander</p>

<p className="text-white text-4xl text-outline z-30">Homelander</p>
</div>
</div> */}

{/* <Image src={`/imagen/bloods.png`} width={400} height={400} className={`absolute blood z-20 `}/> */}




{/* <Image src={`/DetailSelected/background-4.webp`} width={800} height={800} className={`  absolute opacity-0  ${objectanimationserieandcomic.animation4}`}/>
<Image src={`/DetailSelected/background-3.webp`} width={800} height={800} className={`  absolute opacity-0 ${objectanimationserieandcomic.animation3}`}/>
<Image src={`/DetailSelected/background-2.webp`} width={800} height={800} className={`  absolute opacity-0 ${objectanimationserieandcomic.animation2}`}/>
<Image src={`/DetailSelected/background-1.webp`} width={800} height={800} className={` absolute  ${objectanimationserieandcomic.animation1}`}/> */}
