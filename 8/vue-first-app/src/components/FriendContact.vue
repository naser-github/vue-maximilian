<template>
    <section>
        <ul>
            <li>
                <strong>
                    {{name}} {{isFav=='1'? '(Favourite)': ''}}
                </strong>
            </li>

            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <button @click="toggleDetails">
                {{showDetails? 'Hide': 'Show'}} Details
            </button>

            &nbsp; &nbsp; &nbsp; 
            
            <button @click="changeFav">
                {{isFav=='0'? 'Fav': 'Un-Fav'}}
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
    // props:[
    //     'name',
    //     'email',
    //     'phone',
    //     'fav'
    // ],
    props:{
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        phone:{
            type: String,
            required: true,
        },
        fav:{
            type: Boolean,
            required: true,
            default: false,
        },  
    },
    data(){
        return {
            showDetails: false,
            friends: [
                {
                    id:'latif',
                    name:'Latif Kabir',
                    phone:'0123456789',
                    email:'latif@vue.com',
                }
            ],
            isFav: this.fav,
                
        };
    },

    methods: {

        toggleDetails(){
            this.showDetails = !this.showDetails;
        },

        changeFav(){
            if(this.isFav == '1'){
                this.isFav = '0';
            }else{
                this.isFav = '1';
            }
            
        }
    }
}
</script>
