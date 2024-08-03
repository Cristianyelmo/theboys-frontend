"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { HomeHook } from "../context/HomessContext";

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
      
    }, []);


const [choiceseriesandcomic,setChoiceseriesandcomic] = useState('serie')


const[objectanimationserieandcomic,setObjectanimationserieandcomic]=useState({
  animation1:'',
   animation2:'',
    animation3:'',
     animation4:''
})


const handleChangecomicandserie = (value)=>{
  setChoiceseriesandcomic(value)
  const audio2 = new Audio('/sound/glith.mp3');
      audio2.play();
      if(value == 'comic'){
setObjectanimationserieandcomic({
  animation1:'toggleserieandcomic1',
   animation2:'toggleserieandcomic2',
    animation3:'toggleserieandcomic3',
     animation4:'toggleserieandcomic4'
})
} else{
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
    <div className="w-full h-full">
    <button onClick={()=>setChangepage('CharacterSelected')}>
      volver
   
    </button>
<div className="space-x-2 flex justify-center z-30 relative">
  <button onClick={()=>handleChangecomicandserie('serie')} className={`${choiceseriesandcomic === 'serie' && 'bg-black'} text-white border-[1px] border-white  p-4 text-2xl`} >serie</button>
  <button onClick={()=>handleChangecomicandserie('comic')} className={`${choiceseriesandcomic === 'comic' && 'bg-black'} text-white border-[1px] border-white p-4 text-2xl`} >comic</button>
</div>


<div className="flex flex-col ">
<div className="transform -translate-x-1/2  flex justify-center lg:absolute lg:bottom-0 lg:right-0 lg:-translate-x-0">
<div className="relative ">
<Image src={`/DetailSelected/background-4.webp`} width={1200} height={800} className={`absolute  opacity-0  ${objectanimationserieandcomic.animation4}`}/>
<Image src={`/DetailSelected/background-3.webp`} width={1200} height={800} className={`absolute  opacity-0 ${objectanimationserieandcomic.animation3}`}/>
<Image src={`/DetailSelected/background-2.webp`} width={1200} height={800} className={`absolute  opacity-0 ${objectanimationserieandcomic.animation2}`}/>
<Image src={`/DetailSelected/background-1.webp`} width={1200} height={800} className={`  ${objectanimationserieandcomic.animation1}`}/>
</div>
</div>
 
<div className="lg:p-10 p-2 space-y-10 flex flex-col items-center lg:items-start">
<div className="relative  lg:order-2 ">
<p className="text-white text-4xl lg:text-6xl">{characterselected[valueImage].name}</p>
<p className="text-white text-4xl lg:text-6xl">{characterselected[valueImage].name}</p>
<p className="text-white text-4xl lg:text-6xl text-outline relative bottom-0 left-0 z-30">{characterselected[valueImage].name}</p>

<Image src="/imagen/bloostest3.webp"  width={700} height={700} className="absolute bottom-0 left-0 z-10"/>

</div>
<div>
<p className="text-white text-sm lg:w-[60%]   lg:order-1 ">Homelander es el mejor de los superhéroes existentes y el líder de The Seven. Además de volar, tiene una fuerza sobrehumana y un oído portentoso. Su visión de rayos X puede traspasar prácticamente cualquier material y destruirlo con la precisión de un láser. Aparentemente es una persona amable, sincera y modesta, siempre dispuesto a ayudar, todo un patriota norteamericano temeroso de Dios. Pero al igual que los simples mortales, los superhéroes tienen secretos, pero en el caso de Homelander, son demasiado oscuros. Estos secretos, lo terminan enfrentando con Billy Butcher.</p>
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
