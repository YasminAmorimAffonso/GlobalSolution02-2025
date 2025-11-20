

import { useState, useEffect } from "react";


import "./Modal.css";

export default function Modal({ perfil, onClose, colorCard }) {

    const [pathImg, setPathImg] = useState("/assets/imgs/vectorXClaro.svg");

    if (!perfil) return null;

    useEffect(() => {

        if (colorCard !== "card") {

            setPathImg("/assets/imgs/vectorXEscuro.svg");

        }

        else {

            setPathImg("/assets/imgs/vectorXClaro.svg");

        }

    }, [colorCard]);


    function enviarMensagem() {

        alert(`Mensagem Enviada ao(à) profissional ${perfil.nome}!`);

    }


    function recomendarProfissional() {

        alert(`Recomendação do(a) Profissional ${perfil.nome} realizada!`);

    }


    return (

        <div className="modal-overlay">

            <div id={`${colorCard}-modal`} className="p-[30px] z-500 w-4/5 h-3/4 mt-[150px] rounded-2xl overflow-y-scroll text-center">

                <div className="relative">

                    <button onClick={onClose} className="cursor-pointer transition-all duration-300"><img id="XImg" src={pathImg} alt="Fechar" className="w-5" /></button>

                </div>


                <div className="flex flex-col justify-around items-center">

                    <div id="mainInfo" className="flex flex-col justify-around items-center mb-10">

                        <img id="fotoPerfil" src={perfil.foto} alt="" className="mt-5 w-30 rounded-full border-3 mb-5" />

                        <div className="flex flex-col justify-around items-center">

                            <h1>{perfil.nome}</h1>

                            <h3>{perfil.localizacao}</h3>

                            <h3>{perfil.formacao.map(f => (`${f.curso} - ${f.instituicao}, ${f.ano}`))}</h3>

                        </div>

                    </div>


                    <div id="info-modal" className="">

                        <div>

                            <h2>Sobre Mim</h2>

                            <p>{perfil.resumo}</p>

                        </div>

                        <div>

                            <h2>Interesses</h2>

                            <ul className="list-disc">

                                {perfil.areaInteresses.map(i => (<li>{i}</li>))}

                            </ul>

                        </div>

                        <div>

                            <h2>Experiências Anteriores</h2>

                            {perfil.experiencias.map(e => (

                                <div>

                                    <p>{`${e.empresa} - ${e.cargo} (${e.inicio} - ${e.fim})`}</p>

                                    <p>{e.descricao}</p>

                                </div>

                            ))}

                        </div>

                        <div>

                            <h2>Habilidades Técnicas</h2>

                            <ul className="list-disc">

                                {perfil.habilidadesTecnicas.map(ht => (<li>{ht}</li>))}

                            </ul>

                        </div>

                        <div>

                            <h2>Certificações</h2>

                            <ul className="list-disc">

                                {perfil.certificacoes.map(c => (<li>{c}</li>))}

                            </ul>

                        </div>

                        <div>

                            <h2>Idiomas</h2>

                            <ul className="list-disc">

                                {perfil.idiomas.map((i, index) => (<li key={index}>{i.idioma} - {i.nivel}</li>))}

                            </ul>


                        </div>

                        <div>

                            <h2>Soft Skills</h2>


                            <ul className="list-disc">

                                {perfil.softSkills.map(sk => (<li>{sk}</li>))}

                            </ul>


                        </div>

                        <div>

                            <h2>Projetos</h2>

                            {perfil.projetos.map((p, index) => (

                                <div key={index}>

                                    <p>{p.titulo} - <a href={p.link}>{p.link}</a></p>

                                    <p>{p.descricao}</p>

                                </div>

                            ))}

                        </div>

                        <div id="buttons">

                            <button id="mensagem" className="hover:scale-110 cursor-pointer transition-all duration-300" onClick={enviarMensagem}>Enviar Mensagem</button>

                            <button id="recomendar" className="hover:scale-110 cursor-pointer transition-all duration-300" onClick={recomendarProfissional}>Recomendar Profissional</button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
