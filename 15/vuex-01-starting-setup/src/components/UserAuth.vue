<template>
    <button v-if="!status" @click="logIn">Login</button>
    <button v-else @click="logOut">Logout</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default({
    computed:{
        ...mapGetters(['status'])
    },

    methods: {
        ...mapActions(['logIn', 'logOut'])
    },
})
</script>
