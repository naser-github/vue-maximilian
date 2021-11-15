<template>
  <section>
    <ul>
      <li>
        <strong
          >Name: {{ name }} &nbsp; {{ isFav ? "(Favourite)" : "" }}</strong
        >
      </li>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp;

      <button @click="toggleDetails">
        {{ showDetails ? "Hide" : "Show" }} - Details
      </button>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

      <button @click="toggleFav">
        {{ isFav ? "Un-Fav" : "Fav" }}
      </button>

      <ul v-if="showDetails">
        <li>
          <strong> Phone: </strong>
          {{ phone }}
        </li>
        <li>
          <strong> Email: </strong>
          {{ email }}
        </li>
      </ul>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isFav: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value){
      //     return value === "1" || value === "0";
      // }
    },
  },

  emit: {
    'toggle-fav': function(id){
      if(id){
        return true;
      }else{
        console.log('Id id missing');
        return false
      }
    },
  },

  data() {
    return {
      showDetails: false,

      // friends:[
      //     {
      //         id: '1',
      //         name: 'Ivan Johannes',
      //         email: 'ij@vue.com',
      //         phone: '12345678910'
      //     },

      //     {
      //         id: '2',
      //         name: 'Maya Johannes',
      //         email: 'ij@vue.com',
      //         phone: '12345678910'
      //     },

      // ],

      // fav: this.isFav,
    };
  },

  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },

    toggleFav() {
      this.$emit("toggle-fav", this.id);
    },
  },
};
</script>
