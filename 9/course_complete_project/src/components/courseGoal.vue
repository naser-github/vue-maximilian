<template>
    <section>
        <ul>
            <li v-for = "goal in goals" :key="goal">
                <slot :goal="goal" another-prop="..." ></slot>
            </li>
        </ul>
    </section>
</template>

<script>

export default ({
    data(){
        return {
            goals: [ 'Finish that course', 'Learn Vue' ],
        };
    }    
})
</script>
