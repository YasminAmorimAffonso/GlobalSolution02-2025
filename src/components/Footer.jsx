


import "./Footer.css";


export default function Footer() {


    return (

        <div id="content-footer" className="p-5 flex flex-col  pt-15 pb-25 md:flex-row">

            <div className="flex flex-col justify-around items-center md:items-baseline pl-20">

                <img src="/assets/imgs/Logo.svg" alt="" className="lg:w-65"/>

                <p className="font-[neubau] text-[#E6F1FF] text-[17px] text-center w-4/5 pt-10 md:text-left lg:text-[25px]">

                    Descubra profissionais de diversas áreas prontos para colaborar, aprender e transformar o futuro do trabalho.

                    <br /><br />

                    SkillLoop, conectando talentos para construir o futuro do trabalho.

                </p>

            </div>

            <img src="/assets/imgs/linhaFooter.svg" alt="" className="h-50 rotate-90 md:rotate-0 mt-10 lg:h-100 mt-20"/>

            <div className="flex flex-col justify-around items-center h-[150px] md:w-2/3 mt-15 lg:h-[250px] mt-40">

                <a href="#" className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Seja bem-vindo(a)</a>

                <a href="#" className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Conectando o Futuro do Trabalho</a>

                <a href="#" className="font-[neubau] text-[#E6F1FF] text-[17px] lg:text-[25px] hover:scale-110 transition-transform">Explore Talentos e Conexões</a>

            </div>

        </div>
    )
}
