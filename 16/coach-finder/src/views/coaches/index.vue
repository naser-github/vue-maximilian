<template>
  <base-dialogue
    :show="!!error"
    title="An error occurred"
    @close="handleErrorMethod"
  > 
    <p>{{ error }}</p>
  </base-dialogue>
  <section>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadData(true)">Refresh</base-button>
        <base-button link :to="'register'" v-if="!isLoading">
          Register
        </base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="coachExist">
        <coach-item
          v-for="coach in getCoachList"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :areas="coach.areas"
          :description="coach.description"
          :hourly-rate="coach.hourlyRate"
        ></coach-item>
      </ul>

      <h3 v-else>No couch was Found</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "../../components/coaches/coachItem.vue";
import CoachFilter from "../../components/coaches/coachFilter.vue";

export default {
  components: {
    CoachItem,
    CoachFilter,
  },

  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        devOps: true,
      },
    };
  },

  computed: {
    coachExist() {
      return !this.isLoading && this.$store.getters["coaches/coachExist"];
    },
    getCoachList() {
      const coaches = this.$store.getters["coaches/coachList"];

      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend"))
          return true;
        if (this.activeFilters.backend && coach.areas.includes("backend"))
          return true;
        if (this.activeFilters.devOps && coach.areas.includes("devOps"))
          return true;
        return false;
      });
    },
  },

  methods: {

    setFilter(updatedFilter) {
      this.activeFilters = updatedFilter;
    },

    async loadData(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {forcedRefresh: refresh});
      } catch (error) {
        this.error = error.message || "Something went wrong";
        console.log('Error:',this.error);
      }
      this.isLoading = false;
    },

    handleErrorMethod() {
      this.error = null;
    },
  },

  created() {
    this.loadData();
  },
};
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

          