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

  return (
    <HomeContext.Provider
      value={{
        darkness,
        setDarkness,
        handleStart,
        changepage,
        setChangepage,
        start,setStar
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
