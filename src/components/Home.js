import React, { Component } from 'react';
import { DemoDescription } from '../components/DemoDescription';

import SearchUI from '../img/search-ui.png';
import AppleLogo  from '../img/svg-example.png';
import StarryNight  from '../img/starry-night.png';
import AirQualityImg from '../img/api.png';
import FlexboxDemo from '../img/flex.png';
import Summer from '../img/summer.png';


export class Home extends Component {

  render() {

      var demo1 = {
        link: 'https://codepen.io/supern0va/pen/EXrydE',
        imgAlt: "Search UI",
        description: "Search UI - Codepen"
      }
      var demo2 = {
        link: 'https://codepen.io/supern0va/full/mKmjJO/',
        imgAlt: "Apple Logo Ejemplo",
        description: "SVG + Responsive - Codepen"
      }
      var demo3 = {
        link: 'https://codepen.io/supern0va/full/ayLXda/',
        imgAlt: "Search UI",
        description: "Starry Night - CSS Animation - Codepen"
      }
      var demo4 = {
        link: 'http://airquality-api.surge.sh/',
        imgAlt: "Air quality API",
        description: "Air Quality API - React + Aeris API"
      }
      var demo5 = {
        link: 'https://rubi91.github.io/',
        imgAlt: "Flexbox Images",
        description: "Responsive Images Demo - CSS Flexbox"
      }
      var demo6 = {
        link: 'https://codepen.io/supern0va/pen/GGvLdx',
        imgAlt: "Summer Accesories",
        description: "Summer Accesories - CSS Animations & JQuery"
      }
    return (
        <main className="demos__wrapper">
          <DemoDescription
            description={demo1.description}
            img={SearchUI}
            imgAlt={demo1.imgAlt}
            link={demo1.link}
          />
          <DemoDescription
            description={demo2.description}
            img={AppleLogo}
            imgAlt={demo2.imgAlt}
            link={demo2.link}
          />
          <DemoDescription
            description={demo3.description}
            img={StarryNight}
            imgAlt={demo3.imgAlt}
            link={demo3.link}
          />
          <DemoDescription
            description={demo4.description}
            img={AirQualityImg}
            imgAlt={demo4.imgAlt}
            link={demo4.link}
          />
          <DemoDescription
            description={demo5.description}
            img={FlexboxDemo}
            imgAlt={demo5.imgAlt}
            link={demo5.link}
          />
          <DemoDescription
            description={demo6.description}
            img={Summer}
            imgAlt={demo6.imgAlt}
            link={demo6.link}
          />
        </main>

    );

  }
}
