import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import carusel1 from "/images/carusel1.png";
import carusel2 from "/images/carusel2.png";
import carusel3 from "/images/carusel3.png";
import carusel4 from "/images/carusel4.png";

export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div>
          <Image alt="carusel1" src={carusel1} />
        </div>
        <div>
          <Image alt="carusel2" src={carusel2} />
        </div>
        <div>
          <Image alt="carusel3" src={carusel3} />
        </div>
        <div>
          <Image alt="carusel4" src={carusel4} />
        </div>
      </Carousel>
    </div>
  );
}
