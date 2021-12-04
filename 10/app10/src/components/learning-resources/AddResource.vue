<template>
  <section>
    <base-card>
      <form @submit.prevent="addRes">
        <div class="form-control">
          <label> Title </label>
          <input id="title" name="title" type="text" ref="titleInput" />
        </div>

        <div class="form-control">
          <label> Description </label>
          <textarea id="desc" name="desc" rows="3" ref="descInput"></textarea>
        </div>

        <div class="form-control">
          <label> Link </label>
          <input id="link" name="link" type="url" ref="linkInput" />
        </div>

        <div>
          <base-button type="submit">
            Add Resource
          </base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>

export default ({

  inject: ['addResource'],

  methods: {
    addRes(){
      const title = this.$refs.titleInput.value;
      const desc = this.$refs.descInput.value;
      const link = this.$refs.linkInput.value;

      if (title.trim() === '' || desc.trim() === '' || link.trim() === '')
        alert('wrong input');
      else
        this.addResource(title, desc, link);
    }
  },
})
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>