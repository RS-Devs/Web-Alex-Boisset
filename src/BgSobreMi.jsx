import { useEffect, useRef } from "react";
import one from "./assets/img/sobremi/bgsobremi/randomimg/1.webp";
import two from "./assets/img/sobremi/bgsobremi/randomimg/2.webp";
import three from "./assets/img/sobremi/bgsobremi/randomimg/3.webp";
import four from "./assets/img/sobremi/bgsobremi/randomimg/4.webp";
import five from "./assets/img/sobremi/bgsobremi/randomimg/5.webp";
import six from "./assets/img/sobremi/bgsobremi/randomimg/6.webp";
import seven from "./assets/img/sobremi/bgsobremi/randomimg/7.webp";
import eight from "./assets/img/sobremi/bgsobremi/randomimg/8.webp";
import nine from "./assets/img/sobremi/bgsobremi/randomimg/9.webp";
import ten from "./assets/img/sobremi/bgsobremi/randomimg/10.webp";
import eleven from "./assets/img/sobremi/bgsobremi/randomimg/11.webp";
import twelve from "./assets/img/sobremi/bgsobremi/randomimg/12.webp";
import thirteen from "./assets/img/sobremi/bgsobremi/randomimg/13.webp";
import fourteen from "./assets/img/sobremi/bgsobremi/randomimg/14.webp";
import fiveteen from "./assets/img/sobremi/bgsobremi/randomimg/15.webp";
import sixteen from "./assets/img/sobremi/bgsobremi/randomimg/16.webp";
import seventeen from "./assets/img/sobremi/bgsobremi/randomimg/17.webp";
import eighteen from "./assets/img/sobremi/bgsobremi/randomimg/18.webp";
import nineteen from "./assets/img/sobremi/bgsobremi/randomimg/19.webp";
import twenty from "./assets/img/sobremi/bgsobremi/randomimg/20.webp";
import twentyOne from "./assets/img/sobremi/bgsobremi/randomimg/21.webp";
import twentyTwo from "./assets/img/sobremi/bgsobremi/randomimg/22.webp";
import twentyThree from "./assets/img/sobremi/bgsobremi/randomimg/23.webp";
import twentyFour from "./assets/img/sobremi/bgsobremi/randomimg/24.webp";
import twentyFive from "./assets/img/sobremi/bgsobremi/randomimg/25.webp";






// import backgroundImage from "./assets/img/bgAnimated/b3tter/BgB3tter.webp";

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
        <div className="background-image-alex -z-10 animate__animated animate__fadeIn"></div>
      </div>
      <img
        src={one}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={two}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={three}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={four}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={five}
        alt="Barrita B3tter Cacahuete"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={six}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={seven}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={eight}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={nine}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={ten}
        alt="Barrita B3tter Chocolate"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={eleven}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={twelve}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={thirteen}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={fourteen}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={fiveteen}
        alt="Barrita B3tter Arándanos"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={sixteen}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={seventeen}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={eighteen}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={nineteen}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={twenty}
        alt="Cremade cacao B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={twentyOne}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={twentyTwo}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />

      <img
        src={twentyThree}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={twentyFour}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <img
        src={twentyFive}
        alt="Granola B3tter"
        className="background-image z-10 animate__animated animate__fadeIn animate__slow"
      />
      <div className="overflow-hidden">


    


      </div>
      <div className="fire-embers"></div>
    </div>
  );
};

export default BackgroundAnimated;
