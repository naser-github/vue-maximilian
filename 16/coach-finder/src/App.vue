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
  computed: {
    isAutoLogout() {
      return this.$store.getters.isAutoLogout;
    },
  },
  created() {
    this.$store.dispatch("checkLogin");
  },
  watch: {
    isAutoLogout(curVal, oldVal) {
      if (curVal && curVal != oldVal) this.$router.replace("/coaches");
    },
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
