<template>
  <base-card>
    <h2>{{ fullName }}</h2>
    <h3>${{ selectedCoach.hourlyRate }}</h3>
  </base-card>
  <base-card>
    <header>
      <h2>Interested?? Reach out now!</h2>
      <base-button link :to="contactCoach">Contact</base-button>
    </header>
    <router-view></router-view>
  </base-card>
  <base-card>
    <base-badge
      v-for="area in selectedCoach.areas"
      :key="area"
      :type="area"
      :title="area"
    ></base-badge>
    <p>{{ selectedCoach.description }}</p>
  </base-card>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    contactCoach() {
      // return { name: "contact", params: this.id };
      return this.$route.path + "/" + this.id + "/contact";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coachList"].find(
      (coach) => coach.id == this.id
    );
  },
};
</script>