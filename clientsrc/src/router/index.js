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
import TopRankings from "../views/TopRankings.vue";
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
    //TODO Need to import component and link path to link when clicked
    //TODO Need to create and import components for each specified area
    {
      path: "/top-rankings",
      name: "top-rankings",
      component: TopRankings,
    },
    //TODO Need to import component and link path to link when clicked
    {
      path: "/player-stats",
      name: "player-stats",
      component: PlayerStats,
    },
    {
      path: "/player-stats/:playerId",
      name: "player",
    },
    //TODO Need to import component and link path to link when clicked
    {
      path: "/injured-reserve",
      name: "injured-reserve",
      component: InjuredReserve,
    },
    {
      path: "/injured-reserve/:playerId",
      name: "injure-player",
    },
    //TODO Need to import component and link path to link when clicked
    {
      path: "/team-news",
      name: "team-news",
      component: TeamNews,
    },
    {
      path: "/team-news/:teamId",
      name: "single-team-news",
    },
    //TODO Need to import component and link path to link when clicked
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
  ],
});
