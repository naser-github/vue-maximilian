const app = Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ""
        }
    },
    methods: {
        addGoal(){
            return this.goals.push(this.enteredValue);
        }
    },
}).mount('#app');