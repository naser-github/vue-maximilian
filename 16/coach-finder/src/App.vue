<template>
  <div>
    <the-header></the-header>
  </div>
  <router-view />
</template>

<script>
import TheHeader from "./components/layout/header.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
