import B3tterImage from "./assets/img/b3tter/b3tter.jpeg";
import BackgroundAnimated from "./BackgroundAnimated";

const B3tterInfo = ({ onClose }) => {
  const handleClose = () => {
    document.querySelector(".b3tter-info").classList.add("animate__fadeOut");
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full max-h-screen z-50 pt-24 overflow-auto">
      <BackgroundAnimated />
      <div className="b3tter-info flex flex-col items-center rounded-full border-2 border-black shadow-xl shadow-black justify-center mt-auto my-8 mx-auto  max-w-4xl bg-gray-100 py-8 px-4 sm:py-6 sm:px-8 md:py-8 md:px-10 lg:py-12 lg:px-14  xl:px-18 animate__animated animate__fadeIn z-50">
        <img
          src={B3tterImage}
          alt="Imagen de B3TTER"
          className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto rounded-full mb-4 border-4 border-black"
        />

        <div className="p-5">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            ¡Descubre B3tter Foods!
          </h2>
          <p className="text-base sm:text-lg text-center">
            Alex Boisset, uno de los influencers más destacados de Barcelona, y
            el emprendedor Adrià Cruz han revolucionado el mercado con B3tter
            Foods. Esta innovadora línea de snacks saludables ha conquistado
            tanto las tiendas físicas de Ametller Origen como el mundo online
            con su sitio web oficial.
          </p>
          <p className="text-lg text-center mt-4">
            B3tter Foods es una marca que se define como "saludable, sostenible
            y vegana". Su objetivo es desafiar a la industria de los
            ultraprocesados y ofrecer alternativas sabrosas y atractivas para
            una alimentación más saludable. Su comunidad en las redes sociales
            ha crecido rápidamente y se ha convertido en un auténtico fenómeno.
          </p>
          <p className="text-lg text-center mt-4">
            Con ingredientes de origen vegetal y un cuidado equilibrio entre
            sabor y nutrición, B3tter Foods ha lanzado al mercado sus deliciosas
            barritas y su crema de chocolate. Estos productos han agotado
            existencias en numerosos establecimientos, demostrando la alta
            demanda de opciones saludables y deliciosas.
          </p>
          <p className="text-lg text-center mt-4 mb-10">
            B3tter Foods no solo busca ser una marca exitosa, sino también
            inspirar un cambio en la industria alimentaria. Con una inversión
            propia y firme compromiso con sus ideales, los emprendedores detrás
            de B3tter Foods han creado una propuesta que combina calidad, sabor
            y conciencia.
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default B3tterInfo;
