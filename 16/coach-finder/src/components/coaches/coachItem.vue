<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ hourlyRate }} / Hour</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="coachContact"
        >Contact Coach</base-button
      >
      <base-button link :to="coachDetails">Details</base-button>
    </div>
  </li>
</template>

,<script>
import baseButton from "../ui/baseButton.vue";

export default {
  components: { baseButton },
  props: ["id", "firstName", "lastName", "areas", "description", "hourlyRate"],

  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContact() {
      // return { name: "contact", params: this.id };
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetails() {
      // return { name: "coach_id", params: this.id };
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>