<template>
  <form @submit.prevent="submitForm">
    <p v-if="!isValid">Please check again before submitting</p>
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        v-model.trim="firstName.val"
        @blur="clearError('firstName')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lname"
        >Last Name</label
      >
      <input
        type="text"
        id="lname"
        v-model.trim="lastName.val"
        @blur="clearError('lastName')"
      />
    </div>
    <div
      class="form-control"
      :class="{ invalid: !description.isValid }"
    >
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearError('description')"
      ></textarea>
    </div>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly Rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearError('rate')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Area of expertise</h3>

      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearError('areas')"
        />
        <label for="frontend">Frontend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearError('areas')"
        />
        <label for="backend">Backend</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="devOps"
          value="devOps"
          v-model="areas.val"
          @blur="clearError('areas')"
        />
        <label for="devOps">Devops</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: { val: "", isValid: true },
      lastName: { val: "", isValid: true },
      description: { val: "", isValid: true },
      rate: { val: null, isValid: true },
      areas: { val: [], isValid: true },
      isValid: true,
    };
  },

  methods: {
    clearError(input) {
      this[input].isValid = true;
    },

    validateForm() {
      if (this.firstName.val === "") {
        this.firstName.isValid = false;
        this.isValid = false;
      }
      if (this.lastName.val === "") {
        this.lastName.isValid = false;
        this.isValid = false;
      }
      if (this.description.val === "") {
        this.description.isValid = false;
        this.isValid = false;
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false;
        this.isValid = false;
      }
      if (this.areas.val.length === 0) {
        this.areas.isValid = false;
        this.isValid = false;
      }
    },
    submitForm() {
      this.isValid = true;
      this.validateForm();

      if (!this.isValid) {
        return;
      }

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
