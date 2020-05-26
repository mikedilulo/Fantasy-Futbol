<template>
  <div class="home background-image">
    <h1 class="home-title">Fantasy Futbol</h1>
    <p
      class="home-title"
    >Log in to start your fantasy futbol adventure, or take a look at the app demo to see how it works.</p>
    <p class="home-title">Created by Mike Di' Lulo | All rights reserved</p>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style>
.background-image {
  background: url("https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  padding-left: 0px;
  margin-right: 0px;
}

.home-title {
  color: white;
}
</style>