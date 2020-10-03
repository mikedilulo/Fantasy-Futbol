import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";

//* These are the views for the template, need to go in and clean it up
// @ts-ignore
import Boards from "../views/Boards.vue";
// @ts-ignore
import Board from "../views/Board.vue";

//* These are the views for the Home Page before login.
// @ts-ignore
import Contact from "../views/Contact.vue";
// @ts-ignore
import AppDemo from "../views/Demo.vue";
// @ts-ignore
import PlayerNews from "../views/PlayerNews.vue";
// @ts-ignore
import TeamNews from "../views/TeamNews.vue";
// @ts-ignore
import InjuredReserve from "../views/InjuredReserve.vue";
// @ts-ignore
import PlayerStats from "../views/PlayerStats.vue";
// @ts-ignore
import TopRankings from "../views/TopRankings.vue";
// @ts-ignore
import MensWorldCup from "../views/MensWorldCup.vue";
// @ts-ignore
import WomensWorldCup from "../views/WomensWorldCup.vue";
// @ts-ignore
//* This starts the World Cup Years for Mens
import MensWorldCup1930 from "../views/MensWorldCup1930";
// @ts-ignore
import MensWorldCup1934 from "../views/MensWorldCup1934";
// @ts-ignore
import MensWorldCup1938 from "../views/MensWorldCup1938";
// @ts-ignore
import MensWorldCup1950 from "../views/MensWorldCup1950";
// @ts-ignore
import MensWorldCup1954 from "../views/MensWorldCup1954";
// @ts-ignore
import MensWorldCup1958 from "../views/MensWorldCup1958";
// @ts-ignore
import MensWorldCup1962 from "../views/MensWorldCup1962";
// @ts-ignore
import MensWorldCup1966 from "../views/MensWorldCup1966";
// @ts-ignore
import MensWorldCup1970 from "../views/MensWorldCup1970";
// @ts-ignore
import MensWorldCup1974 from "../views/MensWorldCup1974";
// @ts-ignore
import MensWorldCup1978 from "../views/MensWorldCup1978";
// @ts-ignore
import WomensWorldCup1991 from "../views/WomensWorldCup1991"
// @ts-ignore
import WomensWorldCup1995 from "../views/WomensWorldCup1995"
import WomensWorldCup1991 from "../views/WomensWorldCup1991"
import WomensWorldCup1991 from "../views/WomensWorldCup1991"
import WomensWorldCup1991 from "../views/WomensWorldCup1991"
import WomensWorldCup1991 from "../views/WomensWorldCup1991"
import WomensWorldCup1991 from "../views/WomensWorldCup1991"
import WomensWorldCup1991 from "../views/WomensWorldCup1991"

import { authGuard } from "@bcwdev/auth0-vue";

Vue.use(Router);

export default new Router({
  //TODO Clean up Routes already given in template
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/boards",
      name: "boards",
      component: Boards,
      beforeEnter: authGuard,
    },
    {
      path: "/boards/:boardId",
      name: "board",
      component: Board,
    },
    {
      path: "*",
      redirect: "/",
    },
    //* Below are the routes for the fantasy futbol application
    {
      path: "/top-rankings",
      name: "top-rankings",
      component: TopRankings,
    },
    {
      path: "/player-stats",
      name: "player-stats",
      component: PlayerStats,
    },
    //TODO Might need to change this as far as players go, to make it more generic instead of what is accessed on the first page. Unless I wanted to do something separate for players
    //TODO Need a fixtures (schedule) Link but that will be on the inside after authentication.
    //TODO Fixtures for games in general (schedule) along with scores
    //TODO Need a view for each year for Women's World Cup

    {
      path: "/player-stats/:playerId",
      name: "player",
    },
    {
      path: "/injured-reserve",
      name: "injured-reserve",
      component: InjuredReserve,
    },
    {
      path: "/injured-reserve/:playerId",
      name: "injure-player",
    },
    {
      path: "/team-news",
      name: "team-news",
      component: TeamNews,
    },
    {
      path: "/team-news/:teamId",
      name: "single-team-news",
    },
    {
      path: "/player-news",
      name: "player-news",
      component: PlayerNews,
    },
    {
      path: "/player-news/:playerId",
      name: "single-player-news",
    },
    {
      path: "/fantasy-futbol-demo",
      name: "app-demo",
      component: AppDemo,
    },
    {
      path: "/contact",
      name: "contact-us",
      component: Contact,
    },
    //TODO Need Path with :id for World Cup ID's to view the resuts and news of past WC's for mens and womens
    //TODO Need Path for Teams, so when you click on a team you can view its stats, etc
    //TODO Need to do research on World Cup Dates for Both Mens and Womens
    {
      path: "/mens-world-cup",
      name: "world-cup-mens",
      component: MensWorldCup,
    },
    {
      path: "/womens-world-cup",
      name: "world-cup-womens",
      component: WomensWorldCup,
    },
    //* This is the routing for the Mens World Cup Years
    {
      path: "/mens-world-cup/1930",
      name: "mens-world-cup-1930",
      component: MensWorldCup1930,
    },
    {
      path: "/mens-world-cup/1934",
      name: "mens-world-cup-1934",
      component: MensWorldCup1934,
    },
    {
      path: "/mens-world-cup/1938",
      name: "mens-world-cup-1938",
      component: MensWorldCup1938,
    },
    {
      path: "/mens-world-cup/1950",
      name: "mens-world-cup-1950",
      component: MensWorldCup1950,
    },
    {
      path: "/mens-world-cup/1954",
      name: "mens-world-cup-1954",
      component: MensWorldCup1954,
    },
    {
      path: "/mens-world-cup/1958",
      name: "mens-world-cup-1958",
      component: MensWorldCup1958,
    },
    {
      path: "/mens-world-cup/1962",
      name: "mens-world-cup-1962",
      component: MensWorldCup1962,
    },
    {
      path: "/mens-world-cup/1966",
      name: "mens-world-cup-1966",
      component: MensWorldCup1966,
    },
    {
      path: "/mens-world-cup/1970",
      name: "mens-world-cup-1970",
      component: MensWorldCup1970,
    },
    {
      path: "/mens-world-cup/1974",
      name: "mens-world-cup-1974",
      component: MensWorldCup1974,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/mens-world-cup/1978",
      name: "mens-world-cup-1978",
      component: MensWorldCup1978,
    },
    {
      path: "/womens-world-cup/1991",
      name: "womens-world-cup-1991",
      component: WomensWorldCup1991,
    },
    {
      path: "/womens-world-cup/1995",
      name: "womens-world-cup-1995",
      component: WomensWorldCup1995,
    },
    {
      path: "/womens-world-cup/1999",
      name: "womens-world-cup-1999",
      component: WomensWorldCup1999,
    },
    {
      path: "/womens-world-cup/2003",
      name: "womens-world-cup-2003",
      component: WomensWorldCup2003,
    },
    {
      path: "/womens-world-cup/2007",
      name: "womens-world-cup-2007",
      component: WomensWorldCup2007,
    },
    {
      path: "/womens-world-cup/2009",
      name: "womens-world-cup-2009",
      component: WomensWorldCup2009,
    },
    {
      path: "/womens-world-cup/2013",
      name: "womens-world-cup-2013",
      component: WomensWorldCup2013,
    },
    {
      path: "/womens-world-cup/2017",
      name: "womens-world-cup-2017",
      component: WomensWorldCup2017,
    }
});
