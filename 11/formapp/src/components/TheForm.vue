<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: userNameValidity == 'invalid'}">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        v-model.trim.trim="userName"
        type="text"
        @blur="validateInput"
      />
      <p v-if="userNameValidity === 'invalid' ">Please enter a valid name</p>
    </div>

    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" v-model.trim="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" v-model.trim="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          v-model.trim="interest"
          value="news"
          type="checkbox"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          v-model.trim="interest"
          value="tutorials"
          type="checkbox"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          v-model.trim="interest"
          value="nothing"
          type="checkbox"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" v-model.trim="how" value="courses" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" v-model.trim="how" value="blogs" type="radio" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" v-model.trim="how" value="other" type="radio" />
        <label for="how-other">Other</label>
      </div>
    </div>

    <div class="form-control">
        <rating-control v-model='rating'></rating-control>
    </div>

    <div class="form-control">
      <div>
        <input
          id="confirm"
          v-model.trim="confirm"
          value="confirm"
          type="checkbox"
        />
        <label for="confirm">Confirmation Terms</label>
      </div>
    </div>
    <div>
      <button type="submit">Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl  from './RatingControl.vue';

export default {
  components:{
      RatingControl
  },

  data() {
    return {
      userName: "",
      age: null,
      referrer: "wom",
      interest: [],
      how: null,
      rating: null,
      confirm: false,
      userNameValidity: false,
    };
  },
  methods: {
    validateInput() {
      if (this.userName === "") 
        this.userNameValidity = "invalid";
      else 
        this.userNameValidity = "valid";
    },

    submitForm() {
      console.log(this.userName);
      console.log(this.age);
      console.log(this.referrer);
      console.log(this.interest);
      console.log(this.how);
      console.log(this.confirm);
      console.log(this.rating);

      this.userName = "";
      this.age = null;
      this.referrer = "wom";
      this.interest = null;
      this.how = null;
      this.confirm = false;
      this.rating =  null;
    },
  },
};
</script>


<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input{
  border-color: red;
}

.form-control.invalid label{
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>