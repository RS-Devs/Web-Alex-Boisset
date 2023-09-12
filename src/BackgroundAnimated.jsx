import { useEffect, useRef } from "react";
import BarCacahuete from "./assets/img/bgAnimated/b3tter/barCacahuete.webp";
import BarChocolate from "./assets/img/bgAnimated/b3tter/barChocolate.webp";
import BarArandanos from "./assets/img/bgAnimated/b3tter/barArandanos.webp";
import B3ttertelaJar from "./assets/img/bgAnimated/b3tter/b3ttertelaJar.webp";
import GranolaB3tter from "./assets/img/bgAnimated/b3tter/granolaB3tter.webp";
import CocoGranola from "./assets/img/bgAnimated/b3tter/CocoGranola.webp";

import AlexB3tter from "./assets/img/presentacion/AlexB3tter.webp";
import AlexBar from "./assets/img/presentacion/alex.webp";
import AdriaBar from "./assets/img/presentacion/adria.webp";
import adriab3tter from "./assets/img/presentacion/adriab3tter.webp";


const BackgroundAnimated = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const images = container.querySelectorAll(".background-image");

    const positions = generateRandomPositions(
      images.length,
      containerWidth,
      containerHeight
    );

    images.forEach((image, index) => {
      const initialX = positions[index].x;
      const initialY = positions[index].y;
      const velocityX = Math.random() * 2 - 1;
      const velocityY = Math.random() * 2 - 1;

      image.style.transform = `translate(${initialX}px, ${initialY}px)`;

      const moveImage = () => {
        const rect = image.getBoundingClientRect();
        const currentX = rect.left;
        const currentY = rect.top;

        if (
          currentX < -rect.width ||
          currentX > containerWidth ||
          currentY < -rect.height ||
          currentY > containerHeight
        ) {
          image.style.transform = `translate(${initialX}px, ${initialY}px)`;
        } else {
          const newX = currentX + velocityX;
          const newY = currentY + velocityY;
          image.style.transform = `translate(${newX}px, ${newY}px)`;
        }

        requestAnimationFrame(moveImage);
      };

      moveImage();
    });
  }, []);

  const generateRandomPositions = (count, maxWidth, maxHeight) => {
    const positions = [];

    for (let i = 0; i < count; i++) {
      const position = {
        x: Math.random() * maxWidth,
        y: Math.random() * maxHeight,
      };
      positions.push(position);
    }

    return positions;
  };

  return (
    <div
      className="background-animated-container bg-transparent h-screen overflow-hidden"
      ref={containerRef}
    >
      <div className="container-b3tter">
        <div className="background-image-b3tter -z-10 animate__animated animate__fadeIn"></div>
      </div>
      <img
        src={BarCacahuete}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarCacahuete}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarCacahuete}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={BarCacahuete}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={BarCacahuete}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={BarChocolate}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarChocolate}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarChocolate}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarChocolate}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarChocolate}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarArandanos}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarArandanos}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarArandanos}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarArandanos}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={BarArandanos}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={B3ttertelaJar}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={B3ttertelaJar}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={B3ttertelaJar}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={B3ttertelaJar}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={B3ttertelaJar}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={GranolaB3tter}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={GranolaB3tter}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={GranolaB3tter}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={GranolaB3tter}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={GranolaB3tter}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={CocoGranola}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={CocoGranola}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={CocoGranola}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={CocoGranola}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={CocoGranola}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <div className="overflow-hidden">
        <img
          src={adriab3tter}
          alt="Foto de AlexB3tter"
          className="absolute top-0 left-0 w-48 md:w-56 lg:w-64 h-auto rounded z-0 animate__animated animate__fadeIn animate__fadeIn  animate__fadeInLeft  animate__slow "
        />

        <img
          src={AlexB3tter}
          alt="Foto de AlexB3tter"
          className="absolute bottom-0 top-0 right-0  w-48 md:w-56 lg:w-64 h-auto rounded z-0 animate__animated animate__fadeIn animate__fadeInRight animate__slower  "
        />

        <img
          src={AlexBar}
          alt="Foto de AlexB3tter"
          className="absolute -bottom-40 left-0 w-48 md:w-56 lg:w-64 h-auto rounded z-0 animate__animated animate__fadeIn animate__fadeInUp animate__slow animate__delay-1s"
        />

        <img
          src={AdriaBar}
          alt="Foto de Adria B3tter"
          className="absolute -bottom-52 right-0 w-96 md:w-80 lg:w-96 h-auto rounded z-0 animate__animated animate__fadeIn animate__fadeInUp animate__slower animate__delay-1s"
        />
      </div>
      <div className="fire-embers"></div>
    </div>
  );
};

export default BackgroundAnimated;
