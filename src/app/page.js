"use client"
import Image from "next/image";
import HomeNew from "./components/Home";
import { HomeHook } from "./context/HomessContext";
import Characterchoice from "./components/Characterchoice";
import DetailCharacter from "./components/DetailCharacter";


export default function Home() {
const {changepage} = HomeHook()
  return (
    <main className="bg-[#960c04] ">
       { changepage == 'Home' ? <HomeNew/> :  changepage == 'CharacterSelected' ?  <Characterchoice/> : <DetailCharacter/> }
    </main>
    
       
     
   
  );
}
