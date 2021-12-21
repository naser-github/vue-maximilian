<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <div class="container">
    <user-list></user-list>
  </div>

  <div class="container">
    <div class="block" :class="{ animate: animateBlock }"></div>
    <button @click="animation">Animate</button>
  </div>

  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeaves"
      @leave="leave"
      @after-Leave="afterLeaves"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <!-- "enter-to-from, enter-to-active, enter-to-to" 
      if one need to change the whole class name instead of 
      just first part-->
      <p v-if="paraVisible">This is only visible sometimes.</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="button" mode="out-in">
      <button v-if="!userAreVisible" @click="showUser">Show User</button>
      <button v-else @click="hideUser">Hide User</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import UserList from "./components/UserList.vue";

export default {
  components: { UserList },

  data() {
    return {
      animateBlock: false,
      dialogIsVisible: false,
      paraVisible: false,
      userAreVisible: false,

      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    animation() {
      // this.animateBlock = true;
      this.animateBlock = !this.animateBlock;
    },

    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },

    showUser() {
      this.userAreVisible = true;
    },
    hideUser() {
      this.userAreVisible = false;
    },

    toggleParagraph() {
      this.paraVisible = !this.paraVisible;
    },

    beforeEnter(el) {
      console.log("Before Enter");
      console.log(el);
      el.style.opacity = 0;
    },

    enter(el, done) {
      console.log("Enter");
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },

    afterEnter(el) {
      console.log("After Enter");
      console.log(el);
    },

    beforeLeaves(el) {
      console.log("Before Leaves");
      console.log(el);
    },

    leave(el, done) {
      console.log("Leave");
      console.log(el);
      let round = 100;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round--;
        if (round < 0) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },

    afterLeaves(el) {
      console.log("After Leaves");
      console.log(el);
    },

    enterCancelled(el) {
      console.log("Enter Cancelled");
      console.log(el);
      clearInterval(this.enterInterval);
    },

    leaveCancelled(el) {
      console.log("Leave Cancelled");
      console.log(el);
      clearInterval(this.leaveInterval);
    },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.4s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 0.3s ease-out forwards;
}

/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active {
  transition: all 0.3s ease-out;
}

.para-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.para-leave-active {
  transition: all 0.3s ease-in;
}

.para-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

/* button */

.button-enter-from,
.button-leave-from {
  opacity: 0;
}

.button-enter-active {
  transition: opacity 0.3s ease-out;
}

.button-leave-active {
  transition: opacity 0.3s ease-in;
}

.button-enter-to,
.button-leave-to {
  opacity: 1;
}

.route-enter-active {
  animation: route-fade 0.4s ease-out;
}

.route-leave-active {
  animation: route-fade 0.4s ease-in;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  50% {
    transform: translateX(-90px) scale(1.2);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

@keyframes route-fade {
  0% {
    opacity: 1;
    transform: translateX(30px) scale(1);
  }

  70% {
    opacity: 0.5;
  }


}
</style>