<template>
  <ul>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  </ul>

  <div>
    <input type="text" ref="newUser" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: null,
      users: ['Hanzo', 'Diablo', 'Benimaru', 'Ryouzaki'],
    };
  },

  methods: {
    addUser() {
      const enteredUserName = this.$refs.newUser.value;
      console.log(enteredUserName);
      this.users.unshift(enteredUserName);
    },
    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
      console.log(user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 1 rem 0;
  margin: 1 rem 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute;
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 0.8 ease;
}
</style>