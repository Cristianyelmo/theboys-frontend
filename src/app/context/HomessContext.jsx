// context/HomeContext.js
'use client'
import { createContext, useContext, useState } from "react";

export const HomeContext = createContext(null);

export const HomeHook = () => {
  return useContext(HomeContext);
};

export const HomessProvider = ({ children }) => {
  const [darkness, setDarkness] = useState(false);
const [changepage,setChangepage]=useState('Home')
const [start,setStar] = useState('hidden')
  const handleStart = () => {
    const audio = new Audio('/sound/fucking welcome.mp3');
    audio.play();
   
    setStar('hidden')
    const timer = setTimeout(() => {
      setDarkness(true);
      
    }, 2000);

    const timer2 = setTimeout(() => {
      setChangepage('CharacterSelected')
    }, 3000);
  
    return () => clearTimeout(timer,timer2);




  
  };


  const [characterselected ,setCharacterSelected]=useState([
    {
      id:0,
      name:'A-Train',
      selected:true,
      audio:'a-train',
      timechangepage:2000,
      animationbackground:'hidden',
      animationclick:'my-a-train',
     additionalanimationclick:'opacity-1',
     textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    },
    {
      id:1,
      name:'Billy Butcher',
      selected:false,
      audio:'butcher',
      timechangepage:1200,
      animationbackground:'hidden',
      animationclick:'opacity-butchernew',
      additionalanimationclick:'opacity-0',
     textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    },
    {
      id:2,
      name:'Black Noir',
      selected:false,
      audio:'blacknoir',
      timechangepage:4000,
      animationbackground:'hidden ',
      animationclick:'my-element16',
      additionalanimationclick:'opacity-0',
      textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    },
    {
      id:3,
      name:'Homelander',
      selected:false,
      audio:'onlyman',
      timechangepage:5000,
      animationbackground:'my-element18 block z-50',
      animationclick:'my-element17',
      additionalanimationclick:'opacity-0',
    textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    },
    {
      id:4,
      name:'Kimiko',
      selected:false,
      audio:'kimiko',
      timechangepage:4000,
      animationbackground:'hidden ',
      animationclick:'my-element15',
      additionalanimationclick:'opacity-1',
      textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    },
    {
      id:5,
      name:'Queen Maeve',
      selected:false,
      audio:'queenmeave',
      timechangepage:2000,
      animationbackground:'hidden ',
      animationclick:'opacity-butcher',
      additionalanimationclick:'opacity-0',
     textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    },
    {
      id:6,
      name:'Stormfront',
      selected:false,
      audio:'stormfront',
      timechangepage:4000,
      animationbackground:'my-element11 block bg-white',
      animationclick:'my-element14',
      additionalanimationclick:'opacity-0',
     textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    },
    {
      id:7,
      name:'Starlight',
      selected:false,
      audio:'starlight',
      timechangepage:4000,
      animationbackground:'my-element10 block bg-black',
      animationclick:' block my-element13',
      additionalanimationclick:'opacity-0',
     textcomic:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
      textserie:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.'
    }
  
  ])
  const[valueImage,setValueImage]=useState(0)
  return (
    <HomeContext.Provider
      value={{
        darkness,
        setDarkness,
        handleStart,
        changepage,
        setChangepage,
        start,setStar,
        characterselected ,setCharacterSelected,
        valueImage,setValueImage
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
