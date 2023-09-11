import { useState } from "react";
import AlexBoisset from "./assets/img/presentacion/alexboisset.webp";
import "animate.css";
import AlexBoissetInfo from "./AlexBoissetInfo";

import B3tterInfo from "./B3tterInfo";

import BackgroundAnimatedHover from "./BackgroundAnimatedHover";
import BgSobreMi from "./BgSobreMi";
import BgYoutube from "./BgYoutube";
import BgInstagram from "./BgInstagram";


import { FaYoutube, FaInstagram } from "react-icons/fa";

const MainPage = () => {
  const [showAlexBoisset, setshowAlexBoisset] = useState(false);
  const [showB3tterInfo, setShowB3tterInfo] = useState(false);

  const [isB3tterButtonHovered, setIsB3tterButtonHovered] = useState(false);
    const [isYoutubeButtonHovered, setIsYoutubeButtonHovered] = useState(false);
    const [isInstagramButtonHovered, setIsInstagramButtonHovered] = useState(false);


  const [showBackground, setShowBackground] = useState(false);

  const handleMouseEnter = () => {
    setShowBackground(true);
  };

  const handleMouseLeave = () => {
    setShowBackground(false);
  };

  const handleAlexBoissetClick = () => {
    setshowAlexBoisset(true);
  };

  const handleAlexBoissetClose = () => {
    setshowAlexBoisset(false);
    setShowBackground(false);
  };

  const handleB3tterButtonHover = () => {
    setIsB3tterButtonHovered(true);
  };

  const handleB3tterButtonLeave = () => {
    setIsB3tterButtonHovered(false);
  };

  const handleB3tterInfoClick = () => {
    setShowB3tterInfo(true);
  };




  const handleYoutubeButtonHover = () => {
    setIsYoutubeButtonHovered(true);
  };

  const handleYoutubeButtonLeave = () => {
    setIsYoutubeButtonHovered(false);
  };


  const handleInstagramButtonHover = () => {
    setIsInstagramButtonHovered(true);
  };

  const handleInstagramButtonLeave = () => {
    setIsInstagramButtonHovered(false);
  };


  const alexInfo = {
    nombre: "Alex Boisset",
    fechaNacimiento: "31 de diciembre de 1993",
    paisOrigen: "España",
    edad: "29 años",
    sobreMi:
      "Soy modelo y director creativo. Comencé mi carrera cuando fui descubierto durante unas vacaciones en Nicaragua. Mis primeros pasos fueron en las pasarelas de las Semanas de la Moda. He trabajado con marcas como Salvatore Ferragamo, Calvin Klein y Pura Vida Bracelets. Además, soy co-fundador de B3tter Foods junto a Adrià Cruz.",
    antesDeLaFama:
      "Antes de ser descubierto en Nicaragua, trabajé como profesor de francés durante un año.",
    datosCuriosos:
      "Tuve la oportunidad de dirigir y participar en una campaña de Dior. Además, cuento con más de 170,000 seguidores en Instagram.",
    vidaFamiliar: "Tengo un hermano llamado Mikel.",
    colaboraciones: "Dirigí un video junto a Charly Jordan.",
  };

  return (
    <div className="flex flex-col mt-0 items-center justify-center h-full relative">
      <div className="container-main animate__animated animate__fadeIn animate__slower">
        <div className="background-image-main -z-10 "></div>
      </div>
      {!showAlexBoisset && (
        <>
          <img
            src={AlexBoisset}
            alt="Foto de Alex Boisset"
            className="mt-32  w-64 md:w-80 lg:w-96 h-auto rounded-full z-10 animate__animated animate__fadeIn animate__delay-1s animate__fadeInDown "
          />

          <h1 className="text-3xl border-2 border-white rounded-full p-3 font-bold mt-4 mb-4 z-10 bg-black text-white animate__animated animate__fadeIn animate__delay-2s  animate__fadeInDown">
            Alex Boisset
          </h1>
          <h2 className="text-2xl border-2 border-white rounded-full p-3 z-10 bg-black text-white animate__animated animate__fadeIn animate__delay-2s animate__slower animate__fadeInDown">
            Modelo
          </h2>
          <h2 className="text-2xl border-2 border-white mt-1 rounded-full p-3 mb-8 z-10 bg-black text-white animate__animated animate__fadeIn animate__delay-2s animate__slower animate__fadeInDown">
            Co-funder de B3TTER
          </h2>

          <div className="flex items-center space-x-4">
            <button
              className="bg-white border-2 border-black rounded-full text-black hover:bg-gray-600 hover:text-white font-semibold py-2 px-4  z-10 animate__animated animate__fadeIn animate__delay-3s animate__slow animate__fadeInDown"
              onClick={handleAlexBoissetClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Sobre Mí
            </button>

            <button
              className="bg-white border-2 border-black rounded-full text-black hover:bg-gray-600 hover:text-white   font-semibold py-2 px-4  z-10 animate__animated animate__fadeIn animate__delay-3s animate__slower animate__fadeInDown"
              onClick={handleB3tterInfoClick}
              onMouseEnter={handleB3tterButtonHover}
              onMouseLeave={handleB3tterButtonLeave}
            >
              B3TTER
            </button>
          </div>

          <div className="flex flex-row mt-3">
            {" "}
            {/* Contenedor flex para botones */}
            {/* Botón de YouTube */}
            <a
              href="https://www.youtube.com/@alexboisset"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 border-2 border-white rounded-full text-white hover:bg-red-800 font-semibold mx-5 py-2 px-4 z-10 flex items-center space-x-2 animate__animated animate__fadeIn animate__delay-3s animate__slow animate__fadeInDown"
              onMouseEnter={handleYoutubeButtonHover}
              onMouseLeave={handleYoutubeButtonLeave}
            >
              <FaYoutube className="text-white text-xl" />
            </a>
            {/* Botón de Instagram */}
            <a
              href="https://www.instagram.com/alexboisset"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 border-2 border-white rounded-full text-white hover:bg-pink-800 font-semibold mx-5 py-2 px-4 z-10 flex items-center space-x-2 animate__animated animate__fadeIn animate__delay-3s animate__slow animate__fadeInDown"
              onMouseEnter={handleInstagramButtonHover}
              onMouseLeave={handleInstagramButtonLeave}
            >
              <FaInstagram className="text-white text-xl" />
            </a>
          </div>
        </>
      )}

      {showAlexBoisset && (
        <AlexBoissetInfo onClose={handleAlexBoissetClose} info={alexInfo} />
      )}

      {showB3tterInfo && (
        <B3tterInfo onClose={() => setShowB3tterInfo(false)} />
      )}

      {isB3tterButtonHovered && (
        <>
          <BackgroundAnimatedHover />
        </>
      )}

{isYoutubeButtonHovered && (
        <>
          <BgYoutube />
        </>
      )}

{isInstagramButtonHovered && (
        <>
          <BgInstagram />
        </>
      )}

      {showBackground && (
        <>
          <BgSobreMi />
        </>
      )}
    </div>
  );
};

export default MainPage;
