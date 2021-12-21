<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <h3>{{ normalizedCounter }}</h3>
    <button @click="addStateCounter">Add 1</button>
    <button @click="increaseStateCounter">Add 10</button>

  </base-container>
</template>
 
<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },

  computed: {
    counter(){
      return this.$store.getters.showCounter;
    },
    normalizedCounter(){
      return this.$store.getters.normalizeGetter;
    }
  },

  methods: {
    addStateCounter(){
      // this.$store.commit('increment'); 
      this.$store.dispatch('increment');
    },
    increaseStateCounter(){
      this.$store.commit('increase', {value:10}); 
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>