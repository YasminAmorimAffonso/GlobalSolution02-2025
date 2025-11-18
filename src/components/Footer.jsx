


import "./Footer.css";


export default function Footer({secHero, secMiddle, secPerfis}) {


    return (

        <div id="content-footer" className="p-5 flex flex-col pt-25 pb-25 md:flex-row">

            <div className="flex flex-col justify-around items-center md:items-baseline">

                <img src="/assets/imgs/Logo.svg" alt="" className="lg:w-65"/>

                <p className="font-[neubau] text-[#E6F1FF] text-[17px] text-center w-4/5 pt-10 md:text-left lg:text-[25px]">

                    Descubra profissionais de diversas áreas prontos para colaborar, aprender e transformar o futuro do trabalho.

                    <br /><br />

                    SkillLoop, conectando talentos para construir o futuro do trabalho.

                </p>

            </div>

            <img id="linha-footer" src="/assets/imgs/linhaFooter.svg" alt="" className="h-50 rotate-90 md:rotate-0 lg:h-100"/>

            <div id="linksSections-footer" className="flex flex-col justify-around items-center h-[150px] md:w-2/3 lg:h-[250px]">

                <a href={`#${secHero}`} className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Seja bem-vindo(a)</a>

                <a href={`#${secMiddle}`} className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Conectando o Futuro do Trabalho</a>

                <a href={`#${secPerfis}`} className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Explore Talentos e Conexões</a>

            </div>

        </div>
    )
}
