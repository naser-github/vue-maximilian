const app = Vue.createApp({
    data() {
        return {
            name: '',
            fullName: '',
            value: 100,
        }
    },
    methods: {
        add(num) {
            this.value = this.value + num;
        },

        subtract(num) {
            this.value = this.value - num;
        },

        setName(name) {
            this.name = name.target.value;
        },

        showName() {
            this.fullName = this.name;
        },

        submitFormPrevent() {
            alert('prevented submit');
        },

    },
})

app.mount('#events');