

import Footer from './components/Footer';

import Header from './components/Header';

import Modal from './components/Modal.jsx';

import './Home.css';

import ColorChangeButton from './components/ColorChangeButton.jsx';

import { useEffect, useState } from 'react';

import perfis from "./data/Perfis.json";

export default function Home() {

  const [active, setActive] = useState(null);

  const [idSecHero, setIdSecHero] = useState("secHero");
  const [imgHero, setImgHero] = useState("/assets/imgs/elipseEscura.svg");
  const [secMiddle, setSecMiddle] = useState("secMiddle");
  const [secPerfis, setSecPerfis] = useState("secPerfis");
  const [secFiltros, setSecFiltros] = useState("secFiltros");
  const [linhaUpSecFiltros, setlinhaUpSecFiltros] = useState("/assets/imgs/linhaFiltrosClaro1.svg");
  const [linhaDownSecFiltros, setlinhaDownSecFiltros] = useState("/assets/imgs/linhaFiltrosClaro2.svg");
  const [arrowSecFiltros, setArrowSecFiltros] = useState("/assets/imgs/setaFiltrosClaro.svg");
  const [colorCard, setColorCard] = useState("card");

  useEffect(() => {

    for (let n = 0; n < 5; n++) {

      console.log(perfis[n]);

    }


    function updateActive() {

      const value = JSON.parse(localStorage.getItem("activeState"));

      setActive(value);

      if (value == true) {

        setIdSecHero("secHeroEscura");

        setImgHero("/assets/imgs/elipseBranca.svg");

        setSecMiddle("secMiddleEscura");

        setSecPerfis("secPerfisEscura");

        setSecFiltros("secFiltrosEscura");

        setlinhaUpSecFiltros("/assets/imgs/linhaFiltrosEscuro1.svg");

        setlinhaDownSecFiltros("/assets/imgs/linhaFiltrosEscuro2.svg");

        setArrowSecFiltros("/assets/imgs/setaFiltrosEscuro.svg");

        setColorCard("cardEscuro");

      }

      else {

        setIdSecHero("secHero");

        setImgHero("/assets/imgs/elipseEscura.svg");

        setSecMiddle("secMiddle");

        setSecPerfis("secPerfis");

        setSecFiltros("secFiltros");

        setlinhaUpSecFiltros("/assets/imgs/linhaFiltrosClaro1.svg");

        setlinhaDownSecFiltros("/assets/imgs/linhaFiltrosClaro2.svg");

        setArrowSecFiltros("/assets/imgs/setaFiltrosClaro.svg");

        setColorCard("card");

      }


    }

    updateActive();

    window.addEventListener("activeChange", updateActive);

    return () => {

      window.removeEventListener("activeChange", updateActive);


    };



  }, []);


  function verifyColor(valueFromButton) {

    if (valueFromButton == true) {

      setIdSecHero("secHeroEscura");

    } else {

      setIdSecHero("secHero");

    }

  }



  return (

    <div>

      <Header />

      <ColorChangeButton onClick={verifyColor} />

      <div className='h-full flex flex-col'>

        <img id='forma1' src="/assets/imgs/Forma1.svg" alt="" className='absolute translate-y-175 translate-x-35' />

        <div id={idSecHero} className='w-full h-screen bg-cover bg-center flex justify-center items-center flex-col overflow-hidden'>


          <img id='imgSecHero' src={imgHero} alt="" className='mt-50 w-120 z-1' />


          <div className='z-2 -translate-y-87 flex flex-col justify-center items-center'>

            <img src="/assets/imgs/sejaBemVindo.svg" alt="Seja Bem-Vindo(a)" className='w-75' />

            <p className='w-[350px] translate-y-7 text-center font-[neubau] text-[21px]'>Impulsionando conexões que transformam carreiras, aproximando profissionais, oportunidades e propósitos. Explore competências, descubra talentos e participe de uma rede colaborativa que constrói um futuro mais inovador, inclusivo e sustentável.</p>

          </div>

        </div>

        <div id={secMiddle} className='h-1/2 bg-cover bg-center flex flex-row items-center pt-20 pb-20 p-5 overflow-hidden'>

          <div className='w-[200px] z-1'>

            <h1 className='font-[cyrovoid]'>Conectando o Futuro do Trabalho</h1>

            <p className='w-[225px] font-[neubau] mt-10'>A SkillLoop nasce com o propósito de aproximar profissionais de diferentes áreas, promovendo conexões autênticas e colaborativas. Acreditamos que o futuro do trabalho é construído com base em competências, propósito e diversidade, e que a tecnologia pode ser o elo capaz de transformar relações profissionais em oportunidades reais de crescimento.
              Nossa plataforma incentiva a troca de experiências, o desenvolvimento contínuo e a formação de redes significativas, unindo talentos que desejam impulsionar juntos um mercado mais inclusivo, sustentável e humano.</p>

          </div>

          <img src="/assets/imgs/vectorLaptop.svg" alt="" className='relative w-75 mt-10' />

        </div>

        <div id={secPerfis}>

          {/* <Modal colorCard={colorCard}/> */}

          

          {perfis.map((p) => (

            <div id={colorCard} idPerfil={p.id}>

              <h1>{p.nome}</h1>

                {p.habilidadesTecnicas.map((h) => (
                  <p>{h}</p>
                ))}

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </div>

  );

}
