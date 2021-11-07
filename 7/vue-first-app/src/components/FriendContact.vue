<template>
    <section>
        <ul>
            <li>
                <strong>{{friend.name}}</strong>
            </li>

            <button @click="toggleDetails">
                {{showDetails? 'Hide': 'Show'}} Details
            </button>

            <ul v-if="showDetails">
                <li>
                    <strong> Phone: </strong> 
                    {{friend.phone}}
                </li>
                <li>
                    <strong> Email: </strong> 
                    {{friend.email}}
                </li>
            </ul>
        </ul>
    </section>
</template>

<script>
 
export default {
    data(){
        return {
            showDetails: false,
            friend: {
                id:'latif',
                name:'Latif Kabir',
                phone:'0123456789',
                email:'latif@vue.com',
            },
                
        };
    },

    methods: {
        toggleDetails(){
            this.showDetails = !this.showDetails;
        }
    }
}
</script>
