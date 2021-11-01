const app = Vue.createApp({
    data() {
        return {
            boxA: false,
            boxB: false,
            boxC: false,
            boxD: false,

        };
    },

    computed: {
        boxClass() {
            return { active: this.boxD };
        }
    },

    methods: {
        boxFunc(box) {
            if (box === 'A') {
                this.boxA = true;
            } else if (box === 'B') {
                this.boxB = true;
            } else if (box === 'C') {
                this.boxC = true;
            } else if (box === 'D') {
                this.boxD = true;
            }
        }
    }
});

app.mount('#styling');