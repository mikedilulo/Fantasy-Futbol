import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Boards from "../views/Boards.vue";
// @ts-ignore
import Board from "../views/Board.vue";
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
    //TODO Need a World cup for mens and Womens based off years. so example would be womens-world-cup/:worldcupyearID
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
    //TODO Need Women's World Cup Home Page with path, name, component
    //TODO Need Path with :id for World Cup ID's to view the resuts and news of past WC's for mens and womens
    //TODO Need Path for Teams, so when you click on a team you can view its stats, etc
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
  ],
});
