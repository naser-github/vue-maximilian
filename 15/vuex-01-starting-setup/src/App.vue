<template>
  <base-container title="Vuex" v-if="status">
    <h3>{{ showCounter }}</h3>
    <h3>{{ normalizeGetter }}</h3>
    <!-- <button @click="addStateCounter">Add 1</button>
    <button @click="increaseStateCounter">Add 10</button> -->
    <button @click="increment">Add 1</button>
    <button @click="increase({ value: 10 })">Add 10</button>
  </base-container>

  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>
 
<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    UserAuth,
  },

  computed: {
    // counter(){
    //   return this.$store.getters.showCounter;
    // },
    // normalizedCounter(){
    //   return this.$store.getters.normalizeGetter;
    // },
    ...mapGetters(['showCounter', 'normalizeGetter', 'status']),
  },

  methods: {
    // addStateCounter(){
    //   // this.$store.commit('increment');
    //   this.$store.dispatch('increment');
    // },
    // increaseStateCounter(){
    //   // this.$store.commit('increase', {value:10});
    //   this.$store.dispatch('increase', {value:10});
    // },
    ...mapActions(['increment', 'increase']),
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