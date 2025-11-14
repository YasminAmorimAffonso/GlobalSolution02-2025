

import { useState } from "react";

import "./ColorChangeButton.css";

export default function ColorChangeButton({ onClick }) {

    const [image, setImage] = useState("/assets/imgs/iconeEscuro.svg");

    const [active, setActive] = useState(false);


    function colorChange() {

        const newState = !active;

        setActive(newState);

        localStorage.setItem("activeState", JSON.stringify(newState));

        window.dispatchEvent(new Event("activeChange"));


        if (newState == true) {

            setImage("/assets/imgs/iconeClaro.svg");

        }
        else {

            setImage("/assets/imgs/iconeEscuro.svg");
            
        }

        if (onClick) onClick(newState);
    }



    return (

        <div className="fixed z-10 w-full flex justify-end p-5">

            <button id="botao-CCButton" onClick={colorChange} className="mt-35  w-15 hover:scale-110 cursor-pointer">

                <img src={image} alt="botão modo claro/escuro" />

            </button>

        </div>

    );

}
