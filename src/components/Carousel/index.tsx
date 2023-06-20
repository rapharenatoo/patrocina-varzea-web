import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import PhoneSplash from "../../assets/phone-splash.png";
import PhoneOptions from "../../assets/phone-options.png";
import PhoneHomePatrocinador from "../../assets/phone-home-patrocinador.png";
import PhoneHomeConfeccao from "../../assets/phone-home-confeccao.png";
import PhoneClub from "../../assets/phone-club.png";
import PhoneCampeonato from "../../assets/phone-campeonato.png";

export function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      width='230px'
    >
      <div>
        <img src={PhoneSplash} />
      </div>
      <div>
        <img src={PhoneOptions} />
      </div>
      <div>
        <img src={PhoneHomePatrocinador} />
      </div>
      <div>
        <img src={PhoneHome} />
      </div>
      <div>
        <img src={PhoneClub} />
      </div>
      <div>
        <img src={PhoneCampeonato} />
      </div>
      <div>
        <img src={PhoneHomeConfeccao} />
      </div>
      <div>
        <img src={PhoneClub} />
      </div>
    </Carousel>
  );
}
