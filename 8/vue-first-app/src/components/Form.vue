<template>
  <form @submit.prevent="submitForm">
    <label> Name </label>
    <input type="text" v-model="name" />
    <br />

    <label> Email </label>
    <input type="email" v-model="email" />
    <br />

    <label> Phone </label>
    <input type="number" v-model="phone" />
    <br />

    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  emit: ['add-contact'],

  data() {
    return {
        name: '',
        email: '',
        phone: ''
    };
  },

  methods: {
      submitForm(){
          this.$emit('add-contact', this.name, this.email, this.phone,)
      }
  },
};
</script>
