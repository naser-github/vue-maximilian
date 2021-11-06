const app = Vue.createApp({
    // data() {
    //     return {
    //         friends:[
    //         {
    //             id: 'carl',
    //             name: 'carl spancer',
    //             phone:'1234567890',
    //             email:'carl@vue.com'
    //         },
    //         {
    //             id: 'parl',
    //             name: 'parl spancer',
    //             phone:'1234567890',
    //             email:'parl@vue.com'
    //         },
    //     ]           
    //     }
    // },
})

app.component('vue-component',{
    template: `
        <li>
            <h2>{{friend.name}}</h2>
            <button @click="toggle">{{dataVisible? "Hide": "Show"}} Details</button>
            <ul v-if="dataVisible">
                <li><strong>Phone:</strong> {{friend.phone}}</li>
                <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
        </li>
    `,

    data() {
        return {
            dataVisible: false,
            friend:{
                    id: 'carl',
                    name: 'carl spancer',
                    phone:'1234567890',
                    email:'carl@vue.com'
                },
            
        };

    },

    methods: {
        toggle(){
            this.dataVisible = !this.dataVisible;
        }
        
    },

    
})

app.mount('#app')