<template>
  <section>
    <h3>{{ topicName }}</h3>

    <p>{{ description }}</p>

    <button @click="selectTopic(id)">Learn More</button>
  </section>
</template>

<script>
export default {
  
  props: ['id', 'topicName', 'description'],

  inject: ['selectTopic'],

  // emits: ['select-topic'],
};
</script>
