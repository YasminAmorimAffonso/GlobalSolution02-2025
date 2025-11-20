

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
  const [colorButton, setColorButton] = useState("buttonAplicar");
  const [colorCard, setColorCard] = useState("card");
  const [filtrosAberto, setFiltrosAberto] = useState(false);
  const [filtroAreas, setFiltroAreas] = useState([]);
  const [filtroTecnologias, setFiltroTecnologias] = useState([]);
  const [filtroCidades, setFiltroCidades] = useState([]);
  const [perfisFiltrados, setPerfisFiltrados] = useState(perfis);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [perfilSelecionado, setPerfilSelecionado] = useState(null);



  const areas = [...new Set(perfis.map(p => p.area))];
  const cidades = [...new Set(perfis.map(p => p.localizacao))];
  const tecnologias = [...new Set(perfis.flatMap(p => p.habilidadesTecnicas))];


  useEffect(() => {

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

        setColorButton("buttonAplicarEscuro");

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

        setColorButton("buttonAplicar");

        setColorCard("card");

      }


    }

    updateActive();

    window.addEventListener("activeChange", updateActive);


    setTimeout(() => setLoading(false), 1500);

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


  function toggleFiltro(valor, filtro, setFiltro) {

    if (filtro.includes(valor)) {

      setFiltro(filtro.filter(v => v !== valor));

    }

    else {

      setFiltro([...filtro, valor]);

    }


  }


  function handleAplicarFiltros() {

    setLoading(true);

    setTimeout(() => {

      let filtrados = perfis;

      if (filtroAreas.length > 0) {
        filtrados = filtrados.filter(p => filtroAreas.includes(p.area));
      }

      if (filtroTecnologias.length > 0) {
        filtrados = filtrados.filter(p =>
          p.habilidadesTecnicas.some(h => filtroTecnologias.includes(h))
        );
      }

      if (filtroCidades.length > 0) {
        filtrados = filtrados.filter(p => filtroCidades.includes(p.localizacao));
      }


      if (filtrados.length === 0) {
        setPerfisFiltrados([{ notFound: true }]);
      } else {
        setPerfisFiltrados(filtrados);
      }


      setLoading(false);

    }, 1200);
  }



  function LoadingScreen({ active }) {

    return (

      <div className={`fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center transition-all duration-500 z-[9999] ${active ? "bg-[#0c1117]" : "bg-[#e6e6e6]"}`}>

        <p className={`font-[cyrovoid] text-[28px] mb-6 tracking-wider ${active ? "text-[#cce7dd]" : "text-[#22333b]"}`}> Carregando...</p>

        <div className="animate-spin rounded-full h-14 w-14 border-[3px]" style={{ borderColor: active ? "#1affc6" : "#5b6f73", borderTopColor: "transparent", }}></div>

      </div>


    );


  }

  function abrirModal(perfil) {

    setPerfilSelecionado(perfil);

    setModalOpen(true);


  }



  return (

    <div className='overflow-x-hidden'>

      {loading && <LoadingScreen active={active} />}


      <Header secHero={idSecHero} secMiddle={secMiddle} secPerfis={secPerfis} />

      <ColorChangeButton onClick={verifyColor} />

      <img id='forma1' src="/assets/imgs/Forma1.svg" alt="" className='w-[1000px] translate-y-[450px] translate-x-[150px]' />

      <div id='content-home' className='h-full flex flex-col -mt-[425px]'>

        <div id={idSecHero} className='w-full h-screen bg-cover bg-center flex justify-center items-center flex-col overflow-hidden pb-5'>


          <img id='imgSecHero' src={imgHero} alt="" className='mt-50 w-120 z-1 pt-60 p-1' />


          <div className='z-2 -translate-y-60 flex flex-col justify-center items-center'>

            <img src="/assets/imgs/sejaBemVindo.svg" alt="Seja Bem-Vindo(a)" className='w-75 ml-5' />

            <p className='w-[250px] translate-y-3 text-center font-[neubau] text-[14px]'>Impulsionando conexões que transformam carreiras, aproximando profissionais, oportunidades e propósitos. Explore competências, descubra talentos e participe de uma rede colaborativa que constrói um futuro mais inovador, inclusivo e sustentável.</p>

          </div>

        </div>

        <div id={secMiddle} className='h-1/2 bg-cover bg-center flex flex-row items-center pt-20 pb-20 p-5'>

          <div className=' z-2'>

            <h1 className='font-[cyrovoid] w-[200px]'>Conectando o Futuro do Trabalho</h1>

            <p className='w-[150px] font-[neubau] text-[12px] mt-10'>A SkillLoop nasce com o propósito de aproximar profissionais de diferentes áreas, promovendo conexões autênticas e colaborativas. Acreditamos que o futuro do trabalho é construído com base em competências, propósito e diversidade, e que a tecnologia pode ser o elo capaz de transformar relações profissionais em oportunidades reais de crescimento.
              Nossa plataforma incentiva a troca de experiências, o desenvolvimento contínuo e a formação de redes significativas, unindo talentos que desejam impulsionar juntos um mercado mais inclusivo, sustentável e humano.</p>

          </div>

          <img src="/assets/imgs/vectorLaptop.svg" alt="" className='w-60 mt-10 z-1' />

        </div>

        <img id='forma2' src="/assets/imgs/Forma2.svg" alt="Forma 2" className='w-[1000px] -translate-x-20 -translate-y-[250px] z-0' />

        <div id={secPerfis} className={`min-h-[1500px] overflow-hidden transition-all duration-500 -mb-[40px] flex flex-col items-center pt-[75px] -mt-[350px]`}>


          <h1 className='font-[cyrovoid] z-1'>Explore Talentos e Conexões</h1>


          <p className='z-1 font-[neubau] text-[12px] mt-10 mb-20 w-2/3 text-center'>Descubra profissionais de diversas áreas prontos para colaborar, aprender e transformar o futuro do trabalho.
            Cada perfil apresenta um universo único de competências técnicas, soft skills e propósitos pessoais, conectando você a pessoas que compartilham os mesmos valores e ambições.
            Encontre talentos inspiradores, troque experiências e construa uma rede profissional mais humana, inclusiva e colaborativa.</p>


          <div id={secFiltros} className='z-1 w-screen'>

            <div className='flex flex-row w-4/5 justify-end pb-3'>

              <h4 className='mr-5'>Filtros</h4>

              <button onClick={() => setFiltrosAberto(!filtrosAberto)} className="transition-transform duration-300"><img src={arrowSecFiltros} alt="Abrir Filtros" className={`w-6 h-6 transition-transform duration-300 ${filtrosAberto ? "rotate-180" : "rotate-0"}`} /></button>

            </div>

            <img id='linhaUpSecFiltros' src={linhaUpSecFiltros} alt="" />

            <div id={active === true ? "contentFiltrosEscuro-home" : "contentFiltros-home"} className={`flex flex-col justify-center overflow-hidden transition-all duration-500 rounded-xl ${filtrosAberto ? "max-h-[900px] opacity-100 p-6" : "max-h-0 opacity-0 p-0 bg-transparent"}`}>

              <div className='w-screen flex flex-row flex-wrap justify-center items-center mt-10'>

                <div className='flex flex-wrap flex-col justify-around items-start h-50 w-[360px] mb-10 -mr-12'>

                  <h6 className='mb-3'>Área</h6>

                  {areas.map((a) => (

                    <div className='flex flex-wrap items-center'>

                      <input type="checkbox" name="" key={a} onChange={() => toggleFiltro(a, filtroAreas, setFiltroAreas)} checked={filtroAreas.includes(a)} />

                      <p className='ml-2'>{a}</p>

                    </div>

                  ))}



                </div>

                <div className='flex flex-wrap flex-col justify-around items-start h-50 w-[310px] mb-10'>

                  <h6 className='mb-3'>Tecnologia</h6>

                  {tecnologias.map((t) => (

                    <div className='flex flex-wrap items-center'>

                      <input type="checkbox" name="" key={t} onChange={() => toggleFiltro(t, filtroTecnologias, setFiltroTecnologias)} checked={filtroTecnologias.includes(t)} />

                      <p className='ml-2'>{t}</p>

                    </div>

                  ))}

                </div>

                <div className='flex flex-wrap flex-col justify-around items-start h-70 w-[323px] mb-10 -mr-3.5'>

                  <h6 className='mb-3'>Cidade</h6>

                  {cidades.map((c) => (

                    <div className='flex flex-wrap items-center'>

                      <input type="checkbox" name="" key={c} onChange={() => toggleFiltro(c, filtroCidades, setFiltroCidades)} checked={filtroCidades.includes(c)} />

                      <p className='ml-2 w-[50px]'>{c}</p>

                    </div>

                  ))}

                </div>

              </div>

              <button id={colorButton} onClick={handleAplicarFiltros} className='font-[neubau] p-5 mb-10 text-[20px]'>Aplicar</button>


              <img id="linhaDownSecFiltros" src={linhaDownSecFiltros} alt="" className='-mb-[25px]' />

            </div>

          </div>

          <div className='overflow-y-scroll m-20 h-[925px] w-4/5 z-1 flex flex-wrap justify-around items-center pt-1'>

            {perfisFiltrados.map((p) => (

              p.notFound ? (
                <p id='notFound' className='text-center text-[18px] font-[neubau] mt-10'>
                  Nenhum perfil encontrado com os filtros selecionados!
                </p>
              ) : (

                <div id={colorCard} onClick={() => abrirModal(p)} idPerfil={p.id} className='flex flex-col justify-around items-center h-2/6 mb-10 p-10 border-4 rounded-2xl hover:scale-102 cursor-pointer transition-all duration-200'>

                  <img src={p.foto} alt="" className='w-30 rounded-full border-2 mb-5' />

                  <h1 className='font-[cyrovoid]'>{p.nome}</h1>


                  <div className='flex flex-wrap justify-around items-center w-4/5'>

                    {p.areaInteresses.map((i) => (

                      <h3 className='font-[neubau] text-[18px]'>{i}</h3>

                    ))}

                  </div>


                  <p className='font-[neubau] text-[18px]'>{p.localizacao}</p>


                </div>

              )))}

          </div>

        </div>

      </div>

      {modalOpen && ( <Modal perfil={perfilSelecionado} onClose={() => setModalOpen(false)} colorCard={colorCard}/>  )}


      <Footer secHero={idSecHero} secMiddle={secMiddle} secPerfis={secPerfis} />

    </div>

  );

}
