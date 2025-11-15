

import { useState } from "react";


export default function Header({secHero, secMiddle, secPerfis}) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <div id="content-header" className="fixed z-10 top-0 left-0 w-full bg-[#00000099] pt-5 pb-5 pl-2 flex flex-row justify-around items-center h-[125px] lg:z-50">

            <img src="/assets/imgs/Logo.svg" alt="Logo" className="w-35 md:w-45 lg:w-65" />


            <div className="hidden md:flex flex-wrap flex-row justify-around items-center w-3/5">

                <a href={`#${secHero}`} className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Seja bem-vindo(a)</a>

                <a href={`#${secMiddle}`} className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Conectando o Futuro do Trabalho</a>

                <a href={`#${secPerfis}`} className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Explore Talentos e Conexões</a>

            </div>


            <button className="md:hidden flex flex-col justify-between w-8 h-6 cursor-pointer hover:scale-110 transition-transform" onClick={() => setMenuOpen(!menuOpen)}aria-label="Abrir menu">

                <div className=" h-1 w-full bg-white rounded"></div>

                <div className="h-1 w-full bg-white rounded"></div>

                <div className="h-1 w-full bg-white rounded"></div>

            </button>


            {menuOpen && (
            
            <div className="absolute top-[125px] left-0 w-full bg-[#000000cc] flex flex-col items-center space-y-4 py-6 md:hidden">
                    
                    <a href={`#${secHero}`} className="font-[neubau] text-[#E6F1FF] text-[25px] hover:scale-110 transition-transform" onClick={() => setMenuOpen(false)}>Seja bem-vindo(a)</a>

                    <a href={`#${secMiddle}`} className="font-[neubau] text-[#E6F1FF] text-[25px] hover:scale-110 transition-transform" onClick={() => setMenuOpen(false)}>Conectando o Futuro do Trabalho</a>

                    <a href={`#${secPerfis}`} className="font-[neubau] text-[#E6F1FF] text-[25px] hover:scale-110 transition-transform" onClick={() => setMenuOpen(false)}>Explore Talentos e Conexões</a>

                </div>

            )}

        </div>

    );

}
