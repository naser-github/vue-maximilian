<template>
  <section>
    <ul>
      <li>
        <strong
          >Name: {{ name }} &nbsp;
          {{ fav? "(Favourite)" : "" }}</strong
        >
      </li>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      &nbsp; &nbsp;

      <button @click="toggleDetails">
        {{ showDetails ? "Hide" : "Show" }} - Details
      </button>

      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

      <button @click="toggleFav">
        {{ fav === "1" ? "Un-Fav" : "Fav" }}
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
    // props: [
    //     'name',
    //     'phone',
    //     'email',
    //     'isFav',
    // ],

    props: {
        name: {
            type:String,
            required: true
        },
        phone: {
            type:String,
            required: true
        },
        email: {
            type:String,
            required: true
        },
        isFav: {
            type:Boolean,
            required:false,
            default: false,
            // validator: function(value){
            //     return value === "1" || value === "0";
            // }
        },
    },
    
    data(){
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

            fav: this.isFav,                 
        };
    },

    methods: {
        toggleDetails(){
            this.showDetails = !this.showDetails;
        },

        toggleFav(){
            this.fav = !this.fav;
            
        }
    }
}
</script>
