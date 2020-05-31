import Vue from "vue";
import Router from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Boards from "../views/Boards.vue";
// @ts-ignore
import Board from "../views/Board.vue";
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
    {
      path: "/top-rankings",
      name: "top-rankings",
    },
    //TODO Need :id route for single player stats, for IR per player, for specific team news, for specific player news
    {
      path: "/player-stats",
      name: "player-stats",
    },
    {
      path: "/player-stats/:playerId",
      name: "player",
    },
    {
      path: "/injured-reserve",
      name: "injured-reserve",
    },
    {
      path: "/injured-reserve/:playerId",
      name: "injure-player",
    },
    {
      path: "/team-news",
      name: "team-news",
    },
    {
      path: "/player-news",
      name: "player-news",
    },
    {
      path: "/fantasy-futbol-demo",
      name: "app-demo",
    },
    {
      path: "/contact",
      name: "contact",
    },
  ],
});
