<script>
    import { store } from '../store.js';

    export default {
        data(){
            return{
                store
            }
        },
        methods:{
            searchEvent() {
                // console.log("From Header: " + this.store.researchInput); // Debugging
                this.$emit('searchingEvent');
            }
        }
    }
</script>

<template>
    <header>
        <div class="container-xxl">
            <form @submit.prevent="searchEvent()" class="py-4">
                <input type="text" v-model="store.researchInput">
                <button type="submit">Cerca</button>
            </form>
        </div>
        
    </header>
</template>

<style scoped>

</style>
