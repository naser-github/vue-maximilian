<template>
  <div>
    <the-header></the-header>

    <!-- <badge-list></badge-list>
    
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    
    <course-goal>
      <template #default="slotProps">
        <h2>{{slotProps.goal}}</h2>
        <p> {{ slotProps['another-prop'] }} </p>
      </template>
    </course-goal> -->

    <button @click="setSelectedComponent('active-goal')"> Active Goals </button>

    <button @click="setSelectedComponent('manage-goal')"> Manage Goals </button>

    <!-- <active-goal v-if="selectedComponent=='active-goal'"></active-goal>
    <manage-goal v-if="selectedComponent=='manage-goal' "></manage-goal> -->

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>
  
<script>

import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoal from './components/courseGoal.vue';

import ActiveGoal from './components/ActiveGoals.vue';
import ManageGoal from './components/ManageGoals.vue';

export default {
  components: {
    'the-header' : TheHeader, 
    BadgeList, // Vue automatically changes BadgeList to badge-list
    UserInfo,
    CourseGoal,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      selectedComponent : 'active-goal',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },

  methods: {
    setSelectedComponent(event){
      this.selectedComponent = event; 
    }
  },
};
</script>

<style scoped>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>