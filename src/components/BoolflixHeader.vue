<script>
    import { store } from '../store.js';
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <form @submit.prevent="console.log('Evento submit del form per la ricerca')">
        <input type="text" v-model="store.researchInput">
        <button type="submit">Cerca</button>
    </form>
    
</template>

<style scoped>

</style>
