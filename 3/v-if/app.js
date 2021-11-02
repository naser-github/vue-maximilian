const app = Vue.createApp({
    data() {
        return {
            goal: '',
            goals: []
        };
    },

    methods: {
        setGoal() {
            // console.log(this.goals);
            this.goals.push(this.goal);
        },

        removeGoal(index) {
            console.log(index);
            this.goals.splice(index, 1);
        }

    }

});

app.mount('#user-goals');