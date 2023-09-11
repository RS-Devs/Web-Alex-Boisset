import SobreMi from "./assets/img/sobremi/SobreMi.webp";

const AlexBoissetInfo = ({ onClose, info }) => {
  const handleClose = () => {
    document.querySelector(".alex-info").classList.add("animate__fadeOut");
    setTimeout(() => {
      onClose();
    }, 500); // Espera 500ms antes de cerrar
  };

  return (
    <div className="alex-info flex flex-col items-center rounded-full border-2 border-black shadow-xl shadow-black justify-center my-8 mx-auto max-w-4xl bg-gray-100 py-8 px-4 sm:py-6 sm:px-8 md:py-8 md:px-10 lg:py-12 lg:px-14  xl:px-18 animate__animated animate__fadeIn z-50">
      <img
        src={SobreMi}
        alt="Imagen de Alex"
        className="w-24 md:w-36 lg:w-48 h-auto rounded-full mb-4 border-4 border-black"
      />
      <h2 className="text-base md:text-lg lg:text-xl font-bold mt-4 mb-4 text-center">{info.nombre}</h2>
      <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-4 text-center">{info.sobreMi}</p>
      <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-4 text-center">{info.antesDeLaFama}</p>
      <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-4 text-center">{info.datosCuriosos}</p>
      <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-4 text-center">{info.vidaFamiliar}</p>
      <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-4 text-center">{info.colaboraciones}</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4"
        onClick={handleClose}
      >
        Cerrar
      </button>
    </div>
  );
};

export default AlexBoissetInfo;
