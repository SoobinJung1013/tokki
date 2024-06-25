/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// const imagesPrefix =
//   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

// yerin baek
import Chicago from "assets/images/albums/chicago.jpeg";
import ByeByeMyBlue from "assets/images/albums/byeByeMyBlue.jpg";
import EveryLetterISentYou from "assets/images/albums/everyLetterISentYou.jpg";
import FRANK from "assets/images/albums/FRANK.jpg";
import Landing from "assets/images/albums/landing.jpg";
import LoveYouOnChristmas from "assets/images/albums/loveYouOnChristmas.jpg";
import NewYear from "assets/images/albums/newyear.jpg";
import OnStage from "assets/images/albums/onstage.jpg";
import OurLoveIsGreat from "assets/images/albums/ourLoveIsGreat.jpg";
import Pisces from "assets/images/albums/pisces.jpg";
import Present from "assets/images/albums/present.jpg";
import ATEEN from "assets/images/albums/sdj.jpg";
import tellusboutyourself from "assets/images/albums/tellusboutyourself.jpg";
import TheOtherSide from "assets/images/albums/theOtherSide.jpg";
import Remix from "assets/images/albums/remix.jpg";

// etc

// tvt
import NewPlant from "assets/images/albums/newplant.jpg";
import TheVolunteers from "assets/images/albums/theVolunteers.jpg";
import L from "assets/images/albums/L.jpg";

// featuring

export default [
  {
    title: "Yerin Baek",
    // description: "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: NewYear,
        name: "New Year",
        count: 10,
        type: "Single",
        route: "/tokki/ablums/single-ep/new-year",
      },
      {
        image: Pisces,
        name: "Pisces",
        count: 14,
        type: "Single",
        route: "/tokki/ablums/single-ep/pisces",
      },
      {
        image: Present,
        name: "Love, Yerin",
        count: 8,
        type: "EP",
        route: "/tokkiablums/single-ep/love-yerin",
      },
      {
        image: Remix,
        name: "tellusboutyourself(Remixse)",
        count: 1,
        type: "EP",
        route: "/tokki/ablums/tellusboutyourself",
      },
      {
        image: tellusboutyourself,
        name: "tellusboutyourself",
        count: 11,
        type: "Album",
        route: "/tokki/ablums/tellusboutyourself",
      },
      {
        image: EveryLetterISentYou,
        name: "Every letter I sent yous",
        count: 11,
        type: "Album",
        route: "/tokki/ablums/every-letter-i-sent-you",
      },
      {
        image: OurLoveIsGreat,
        name: "Our love is great",
        count: 6,
        type: "EP",
        route: "/tokki/ablums/single-ep/our-love-is-great",
      },
      {
        image: LoveYouOnChristmas,
        name: "Love you on Christmas",
        count: 3,
        type: "Single",
        route: "/tokki/ablums/single-ep/love-you-on-christmas",
      },
      {
        image: ByeByeMyBlue,
        name: "Bye bye my blue",
        count: 8,
        type: "Single",
        route: "/tokki/ablums/single-ep/bye-bye-my-blue",
      },
      {
        image: FRANK,
        name: "FRANK",
        count: 6,
        type: "EP",
        route: "/tokki/ablums/single-ep/frank",
      },
    ],
  },
  {
    title: "TVT",
    // description: "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: L,
        name: "L",
        count: 6,
        type: "EP",
        route: "/tokki/ablums/tvt/l",
      },
      {
        image: NewPlant,
        name: "New Plant",
        count: 8,
        type: "Single",
        route: "/tokki/albums/tvt/new-plant",
      },
      {
        image: TheVolunteers,
        name: "The Volunteers",
        count: 3,
        type: "Album",
        route: "/tokki/albums/tvt",
      },
    ],
  },
  {
    title: "ETC",
    // description: "30+ components that will help go through the pages",
    items: [
      {
        image: TheOtherSide,
        name: "The Other Side",
        count: 4,
        type: "Single",
        route: "https://open.spotify.com/album/74eYtrvAQtQJ7RjOnyNrGW",
      },
      {
        image: OnStage,
        name: "Onstage Digging Club Seoul THEME 01",
        count: 3,
        type: "Single",
        route: "https://open.spotify.com/album/4rtzZLM8fEwcSa91x7r3GQ",
      },
      {
        image: ATEEN,
        name: "A-TEEN2 Part.1",
        count: 3,
        type: "Single",
        route: "https://open.spotify.com/album/2quxDpdeABmtoUbYIHgnNa",
      },
      {
        image: Landing,
        name: "Crash Landing on You(Original Television Soundtrack), Pt. 4",
        count: 2,
        type: "Single",
        route: "https://open.spotify.com/album/2qCB3BnsOtq3Rja6nPslrk",
      },
      {
        image: Chicago,
        name: "Chicago Typewriter, Pt 2(Original Soundtrack)",
        count: 2,
        type: "Single",
        route: "https://open.spotify.com/album/2MfhQKpIdLxy0R80VLAdU4",
      },
    ],
  },
];
