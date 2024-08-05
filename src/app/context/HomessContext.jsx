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
     additionalanimationclick:'',
     textcomic:'En los cómics, A-Train es presentado como un personaje arrogante, impulsado por la fama y el ego. No muestra mucha empatía o remordimiento por sus acciones y es uno de los muchos superhéroes corruptos y decadentes que representan el mal uso del poder.',
      textserie:'En la serie, A-Train es retratado como un personaje complejo y en conflicto. Aunque sigue siendo arrogante y egoísta, se muestra más de su vulnerabilidad, especialmente en relación a su temor de perder su estatus y poder. La serie explora sus luchas internas, especialmente con la adicción al Compuesto V y la presión de ser el más rápido.'
    },
    {
      id:1,
      name:'Billy Butcher',
      selected:false,
      audio:'butcher',
      timechangepage:1200,
      animationbackground:'hidden',
      animationclick:'opacity-butchernew',
      additionalanimationclick:'hidden',
     textcomic:'En los cómics, Billy Butcher es un personaje mucho más oscuro, despiadado y cínico. Está motivado por un profundo odio hacia los superhéroes (a quienes llama "supes"), a quienes culpa por la muerte de su esposa, Becca. Su venganza es personal, y está dispuesto a hacer lo que sea necesario, sin importar las consecuencias morales',
      textserie:'En la serie de televisión, interpretado por Karl Urban, Butcher es igualmente rudo y vengativo, pero su personaje tiene más capas de vulnerabilidad y humor negro. Aunque sigue siendo brutal, su carácter es más humanizado, con momentos que revelan sus emociones y conflictos internos.'
    },
    {
      id:2,
      name:'Black Noir',
      selected:false,
      audio:'blacknoir',
      timechangepage:4000,
      animationbackground:'hidden ',
      animationclick:'my-element16',
      additionalanimationclick:'hidden',
      textcomic:'En los cómics, Black Noir es una réplica clonada de Homelander creada por Vought-American como un seguro en caso de que Homelander se salga de control. Esta versión de Black Noir está destinada a reemplazar a Homelander si es necesario.',
      textserie:'En la serie, Black Noir es un personaje completamente diferente. No es un clon de Homelander, sino un superhéroe con habilidades de combate avanzadas y una invulnerabilidad casi total. Su identidad real se mantiene oculta, pero no tiene la misma conexión genética con Homelander que en los cómics.'
    },
    {
      id:3,
      name:'Homelander',
      selected:false,
      audio:'onlyman',
      timechangepage:5000,
      animationbackground:'my-element18',
      animationclick:'my-element17',
      additionalanimationclick:'hidden',
    
      textcomic:' Homelander es presentado como el líder de los Siete, un grupo de superhéroes muy corruptos. Su carácter es extremadamente egocéntrico, violento y despiadado. Su historia de fondo incluye experimentos realizados por Vought-America, que le otorgan sus habilidades. En los cómics, Homelander tiene una serie de actos aún más atroces y despiadados en comparación con la serie de televisión.',
      textserie:'En la adaptación de Amazon Prime Video, el personaje de Homelander, interpretado por Antony Starr, sigue siendo el líder de los Siete, pero su carácter y sus motivaciones están un poco suavizados en comparación con los cómics. Aunque sigue siendo un villano, sus acciones y motivaciones se exploran con más matices para ajustarse a una narrativa más dramática y menos explícita.',
    },
    {
      id:4,
      name:'Kimiko',
      selected:false,
      audio:'kimiko',
      timechangepage:4000,
      animationbackground:'hidden ',
      animationclick:'my-element15',
      additionalanimationclick:'',
      textcomic:'En los cómics, "The Female" es una niña que fue expuesta al Compuesto V mientras aún estaba en el útero, lo que le dio sus habilidades sobrehumanas. Ella fue encontrada por la mafia japonesa, que la utilizó como asesina antes de ser rescatada por The Boys.',
      textserie:'En la serie, Kimiko también fue expuesta al Compuesto V, pero su historia de fondo se desarrolla más detalladamente. Es secuestrada y forzada a convertirse en un "superterrorista" antes de ser liberada por The Boys. Su origen está relacionado con conflictos en Asia y su deseo de reunirse con su hermano es un aspecto importante de su motivación.'
    },
    {
      id:5,
      name:'Queen Maeve',
      selected:false,
      audio:'queenmeave',
      timechangepage:2000,
      animationbackground:'hidden ',
      animationclick:'opacity-butcher',
      additionalanimationclick:'hidden',
     textcomic:'En los cómics, Queen Maeve es una superheroína desencantada y cínica. Ha sido testigo de tanta corrupción y brutalidad que ha perdido la esperanza en la humanidad y en sí misma. Se presenta como alcohólica y profundamente apática, habiendo renunciado a cualquier intento de ser una heroína verdadera.',
      textserie:'En la serie, Queen Maeve, interpretada por Dominique McElligott, es más compleja y se muestra con un mayor conflicto interno. Aunque sigue siendo una heroína desilusionada, su arco de redención es más pronunciado. Se muestra su lucha entre el deseo de hacer lo correcto y el miedo a las represalias de Homelander.'
    },
    {
      id:6,
      name:'Stormfront',
      selected:false,
      audio:'stormfront',
      timechangepage:4000,
      animationbackground:'my-element11',
      animationclick:'my-element14',
      additionalanimationclick:'hidden',
     textcomic:'En los cómics, Stormfront es un hombre, y es el primer superhéroe creado por los nazis durante la Segunda Guerra Mundial. Es un miembro del equipo de superhéroes conocido como Payback, que es un rival de The Seven.',
      textserie:' En la serie, Stormfront es una mujer interpretada por Aya Cash. Originalmente llamada Liberty, Stormfront fue una de las primeras superhéroes creadas por Vought y ha vivido durante décadas, manteniendo su juventud gracias al Compuesto V. En la serie, se revela que fue la esposa de Frederick Vought, el fundador de la compañía.'
    },
    {
      id:7,
      name:'Starlight',
      selected:false,
      audio:'starlight',
      timechangepage:4000,
      animationbackground:'my-element10',
      animationclick:'my-element13',
      additionalanimationclick:'hidden',
     textcomic:'En los cómics, Starlight comienza como una joven idealista que se une a The Seven con la esperanza de hacer el bien y ser una verdadera heroína. Sin embargo, su experiencia en el equipo es brutal, ya que rápidamente se enfrenta a la realidad corrupta y depravada de The Seven. A lo largo de la serie, su carácter se endurece, pero mantiene su deseo de hacer lo correcto.',
      textserie:'En la serie, Starlight también es una joven idealista, pero su carácter se desarrolla de manera más matizada. Aunque enfrenta la corrupción y la depravación de The Seven, incluida la agresión sexual por parte de The Deep (y no de múltiples miembros), su lucha y resistencia son más visibles. La serie muestra su crecimiento como una figura empoderada que comienza a desafiar activamente a The Seven y a Vought.'
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
