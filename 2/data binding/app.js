const app = Vue.createApp({
    data() {
        return {
            name: '',
            fullName: '',
            value: 100,
        }
    },

    // computed: {
    //     showName() {
    //         return this.fullName = this.name;
    //     }
    // },

    watch: {
        name(value) {
            this.fullName = value;
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

        // showName() {
        //     this.fullName = this.name;
        // },

        submitFormPrevent() {
            alert('prevented submit');
        },

        resetForm() {
            this.fullName = '';
        },

    },
})

app.mount('#events');