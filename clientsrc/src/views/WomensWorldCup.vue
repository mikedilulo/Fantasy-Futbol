<template>
  <div class="womens-world-cup">
    <WomensWorldCupNavbar />
    <h1>This is the Women's World Cup Page!</h1>
    <div></div>
  </div>
</template>

      //TODO Need the router links for these to open up a new view when clicked on

<script>
import WomensWorldCupNavbar from "../components/WomensWorldCupNavbar";
export default {
  name: "womens-world-cup",
  components: {
    WomensWorldCupNavbar,
  },
};
</script>

<style>
</style>