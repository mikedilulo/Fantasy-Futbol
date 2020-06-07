<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{ name: 'home' }">Fantasy-Futbol</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'top-rankings' }" class="nav-link">Rankings</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'player-stats' }" class="nav-link">Stats</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'injured-reserve' }" class="nav-link">Injured</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'team-news' }" class="nav-link">Team News</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'player-news' }" class="nav-link">Player News</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'app-demo' }" class="nav-link">App Demo</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'contact-us' }" class="nav-link">Contact Us</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'world-cup-mens' }" class="nav-link">Men's World Cup 2022</router-link>
        </li>
        <li class="nav-item" :class="{ active: $route.name == 'home' }">
          <router-link :to="{ name: 'home' }" class="nav-link">Women's World Cup 2023</router-link>
        </li>
        <li
          class="nav-item"
          v-if="$auth.isAuthenticated"
          :class="{ active: $route.name == 'boards' }"
        >
          <router-link class="nav-link" :to="{ name: 'boards' }">My-Dashboard</router-link>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
        <button class="btn btn-danger" @click="logout" v-else>logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import axios from "axios";

let _api = axios.create({
  baseURL: "https://localhost:3000",
  withCredentials: true
});
export default {
  name: "Navbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      // console.log("this.$auth.user: ");
      // console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  }
};
</script>

<style>
.nav-item:hover {
  background-color: #28d7e7;
  border-radius: 10px;
}
</style>
