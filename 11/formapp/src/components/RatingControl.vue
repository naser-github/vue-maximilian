<template>
  <ul>
    <li>
      <button :class="{active: activeOption === 'poor'}" type="button" @click="activate('poor')">Poor</button>
    </li>

    <li>
      <button :class="{active: activeOption === 'average'}" type="button" @click="activate('average')">Average</button>
    </li>

    <li>
      <button :class="{active: activeOption === 'great'}" type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template> 

<script>  
export default {
  props: ['rating'],
  emits: ['update:modelValue'],
  data() {
    return {
      activeOption: this.rating,
    };
  },

  methods: {
    activate(opt) {
      {
        this.activeOption = opt;
        this.$emit('update:modelValue', opt);
      }
    },
  },
};
</script>


<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>