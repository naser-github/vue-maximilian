<template>
    <section>
        <ul>
            <li>
                <strong>{{names}} {{fav === '1'? '(Favorite)':''}}</strong>
            </li>

            <button @click="toggleDetails">
                {{showDetails? 'Hide': 'Show'}}
            </button>

            <button @click="toggleFav">
                {{fav === '1'? 'UnFav': 'Fav'}}
            </button>

            <ul v-if="showDetails">
                <li>
                    <strong> Phone: </strong> 
                    {{phone}}
                </li>
                <li>
                    <strong> Email: </strong> 
                    {{email}}
                </li>
            </ul>
        </ul>
    </section>
</template>

<script>
 
export default {
    // props: [
    //     'names',
    //     'phone',
    //     'email',
    //     'isFav',
    // ],

    props: {
        names: {
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
            type:String,
            required:false,
            default: '0',
            validator: function(value){
                return value === "1" || value === "0";
            }
        },
    },
    
    data(){
        return {
            showDetails: false,

            friend: {
                id:'latif',
                names:'Latif Kabir',
                phone:'0123456789',
                email:'latif@vue.com',
            },

            fav: this.isFav,                 
        };
    },

    methods: {
        toggleDetails(){
            this.showDetails = !this.showDetails;
        },

        toggleFav(){
            if(this.fav === '1'){
                this.fav = '0';
            }else{
                this.fav = '1';
            }
        }
    }
}
</script>
