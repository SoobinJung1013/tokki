/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Overview
// Introduction
import Introduction from "pages/Overview/Introduction";
// Interview
import Interview from "pages/Overview/Interview";

// Archieve
// Gallery
import Gallery from "pages/Archieves/Gallery";
// Vedio
import Video from "pages/Archieves/Video";
// Concert
import Concert from "pages/Archieves/Concert";
// Festival
import Festival from "pages/Archieves/Festival";
// Cover
import Cover from "pages/Archieves/Cover";
// Show
import Show from "pages/Archieves/Show";

// Albums
// albums
import TellUsBoutYourself from "pages/Albums/Albums/tellusboutyourself";
import EveryLetterISentYou from "pages/Albums/Albums/everyletterisentyou";
// singles & ep
import ByeByeMyBlue from "pages/Albums/SinglesAndEp/bye-bye-my-blue";
import FRANK from "pages/Albums/SinglesAndEp/frank";
import LoveYerin from "pages/Albums/SinglesAndEp/love-yerin";
import LoveYouOnChristmas from "pages/Albums/SinglesAndEp/love-you-on-christmas";
import NewYear from "pages/Albums/SinglesAndEp/new-year";
import OurLoveIsGreat from "pages/Albums/SinglesAndEp/our-love-is-greate";
import Pisces from "pages/Albums/SinglesAndEp/pisces";
// tvt
import L from "pages/Albums/TVT/l";
import NewPlant from "pages/Albums/TVT/new-plant";
import TheVolunteers from "pages/Albums/TVT/the-volunteers";

const routes = [
  {
    name: "Menu",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Overview",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "Introduction",
            route: "/tokki/overview/introductions",
            component: <Introduction />,
          },
          {
            name: "Interview",
            route: "/tokki/overview/interviews",
            component: <Interview />,
          },
        ],
      },
      {
        name: "Archieve",
        collapse: [
          {
            name: "Gallery",
            route: "/tokki/archieve/gallery",
            component: <Gallery />,
          },
          {
            name: "Concert",
            route: "/tokki/archieve/concerts",
            component: <Concert />,
          },
          {
            name: "Festival",
            route: "/tokki/archieve/festivals",
            component: <Festival />,
          },
          {
            name: "Cover",
            route: "/tokki/archieve/covers",
            component: <Cover />,
          },
          {
            name: "Youtube & Show",
            route: "/tokki/archieve/shows",
            component: <Show />,
          },
          {
            name: "TVT",
            route: "/tokki/archieve/tvts",
            component: <Video />,
          },
        ],
      },
    ],
  },
  {
    name: "Albums",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Albums",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "tellusboutyourself",
            route: "/tokki/ablums/tellusboutyourself",
            component: <TellUsBoutYourself />,
          },
          {
            name: "Every Letter I Sent You",
            route: "/tokki/ablums/every-letter-i-sent-you",
            component: <EveryLetterISentYou />,
          },
        ],
      },
      {
        name: "Single & EP",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "New Year",
            route: "/tokki/ablums/single-ep/new-year",
            component: <NewYear />,
          },
          {
            name: "Pisces",
            route: "/tokki/ablums/single-ep/pisces",
            component: <Pisces />,
          },
          {
            name: "Love, Yerin",
            route: "/tokki/ablums/single-ep/love-yerin",
            component: <LoveYerin />,
          },
          {
            name: "Our Love is Great",
            route: "/tokki/ablums/single-ep/our-love-is-great",
            component: <OurLoveIsGreat />,
          },
          {
            name: "Love you on Christmas",
            route: "/tokki/ablums/single-ep/love-you-on-christmas",
            component: <LoveYouOnChristmas />,
          },
          {
            name: "Bye bye my blue",
            route: "/tokki/ablums/single-ep/bye-bye-my-blue",
            component: <ByeByeMyBlue />,
          },
          {
            name: "FRANK",
            route: "/tokki/ablums/single-ep/frank",
            component: <FRANK />,
          },
        ],
      },
      {
        name: "TVT",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "L",
            route: "/tokki/ablums/tvt/l",
            component: <L />,
          },
          {
            name: "New Plant",
            route: "/tokki/albums/tvt/new-plant",
            component: <NewPlant />,
          },
          {
            name: "The Volunteers",
            route: "/tokki/albums/tvt",
            component: <TheVolunteers />,
          },
        ],
      },
    ],
  },
];

export default routes;
