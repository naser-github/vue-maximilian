const app = Vue.createApp({
    data() {
        return {
            name: '',
            value:0,
        }
    },
    methods: {
        setName(name){
            this.name = name.target.value;
        },

        add(num){
            this.value = this.value + num;
        },

        subtract(num){
            this.value = this.value - num;
        },
    
    },
})

app.mount('#events');