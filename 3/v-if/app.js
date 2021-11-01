const app = Vue.createApp({
    data() {
        return {
            goal: '',
            goals: []
        };
    },

    methods: {
        setGoal() {
            console.log(this.goals);
            this.goals.push(this.goal);
        }

    }

});

app.mount('#user-goals');