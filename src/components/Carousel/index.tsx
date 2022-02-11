import * as React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import PhoneSplash from "../../assets/phone-splash.png";
import PhoneOptions from "../../assets/phone-options.png";
import PhoneLogin from "../../assets/phone-login.png";
import PhoneCampeonato from "../../assets/phone-campeonato.png";

const CarouselComponent: React.FC = () => {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      width="230px"
    >
      <div>
        <img src={PhoneSplash} />
      </div>
      <div>
        <img src={PhoneOptions} />
      </div>
      <div>
        <img src={PhoneLogin} />
      </div>
      <div>
        <img src={PhoneCampeonato} />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
