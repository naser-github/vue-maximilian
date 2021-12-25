<template>
  <section>
    <base-card>
      <header>
        <h2>Request Received</h2>
      </header>
      <ul v-if="reqExist">
        <requested-items
          v-for="req in getRequests"
          :key="req.id"
          :coachId="req.coachId"
          :email="req.userEmail"
          :message="req.userMessage"
        ></requested-items>
      </ul>
      <h3 v-else>You haven't got any request</h3>
    </base-card>
  </section>
</template>

<script>
import RequestedItems from "../../components/request/requestedItems.vue";
export default {
  components: {
    RequestedItems,
  },
  data() {
    return {};
  },
  computed: {
    reqExist() {
      return this.$store.getters["requests/reqExist"];
    },
    getRequests() {
      return this.$store.getters["requests/showRequests"];
    },
  },
};
</script>


<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>