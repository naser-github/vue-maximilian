<template>
  <section>
    <h3>{{ topicName }}</h3>

    <p>{{ description }}</p>

    <button @click="$emit('select-topic', id)">Learn More</button>
  </section>
</template>

<script>
export default {
  props: ['id', 'topicName', 'description'],

  emits: ['select-topic'],
};
</script>
