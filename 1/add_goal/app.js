// const app = Vue.createApp({
//     data() {
//         return {
//             goals: [],
//             enteredValue: ""
//         }
//     },
//     methods: {
//         addGoal(){
//             return this.goals.push(this.enteredValue);
//         }
//     },
// }).mount('#app');

const app = Vue.createApp({
    data() {
        return {
            goal: 'Finish this fucking course!',
            link: 'https://laravel.com',
            decision_a: '<h2>dark future no need to set goal</h2>',
            decision_b: '<h2>doesnt matter its still a dark future</h2>',
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber<0.5){
                return this.decision_a;
            }else{
                return this.decision_b;
            }
        }
    },
});

app.mount('#user-goal')