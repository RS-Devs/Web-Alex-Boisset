import { useEffect, useRef } from "react";
import one from "./assets/img/redesSociales/1.webp";
import two from "./assets/img/redesSociales/2.webp";
import three from "./assets/img/redesSociales/3.webp";
import four from "./assets/img/redesSociales/4.webp";
import five from "./assets/img/redesSociales/5.webp";
import six from "./assets/img/redesSociales/6.webp";
import seven from "./assets/img/redesSociales/7.webp";
import eight from "./assets/img/redesSociales/8.webp";
import nine from "./assets/img/redesSociales/9.webp";
import ten from "./assets/img/redesSociales/10.webp";
import eleven from "./assets/img/redesSociales/11.webp";
import twelve from "./assets/img/redesSociales/12.webp";









const BackgroundAnimated = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const images = container.querySelectorAll(".background-image-you");

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
        <div className="background-image-youtube -z-10 animate__animated animate__fadeIn"></div>
      </div>
      <img
        src={one}
        alt="Barrita B3tter Cacahuete"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={two}
        alt="Barrita B3tter Cacahuete"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={three}
        alt="Barrita B3tter Cacahuete"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={four}
        alt="Barrita B3tter Cacahuete"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={five}
        alt="Barrita B3tter Cacahuete"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={six}
        alt="Barrita B3tter Chocolate"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={seven}
        alt="Barrita B3tter Chocolate"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={eight}
        alt="Barrita B3tter Chocolate"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={nine}
        alt="Barrita B3tter Chocolate"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={ten}
        alt="Barrita B3tter Chocolate"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={eleven}
        alt="Barrita B3tter Arándanos"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={twelve}
        alt="Barrita B3tter Arándanos"
        className="background-image-you z-10 animate__animated animate__fadeIn animate__slow"
      />
      
      <div className="overflow-hidden">


    


      </div>
      <div className="fire-embers"></div>
    </div>
  );
};

export default BackgroundAnimated;
