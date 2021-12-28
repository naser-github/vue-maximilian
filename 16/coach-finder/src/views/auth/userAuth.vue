<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>

      <p v-if="!isValid">Check details again</p>

      <base-button :mode="modeSignIn">Login</base-button>
      <base-button :mode="modeSignUp" @click="signUp">SIgn Up</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      isValid: true,
      mode: "login",
    };
  },

  computed: {
    modeSignIn() {
      if (this.mode == "login") return "";
      else return "flat";
    },
    modeSignUp() {
      if (this.mode == "signUp") return "";
      else return "flat";
    },
  },

  methods: {
    submitForm() {
      this.isValid = true;

      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.isValid = false;
        return;
      }

      if (this.mode === "login") {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
      }

      if (this.mode === "signUp") {
        this.$store.dispatch("signUp", {
          email: this.email,
          password: this.password,
        });
      }
    },
    signUp() {
      if (this.mode === "login") this.mode = "signUp";
      else this.mode = "login";
    },
  },
};
</script>


<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>