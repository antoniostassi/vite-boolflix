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
                this.$emit('searchingEvent');
            }
        }
    }
</script>

<template>
    <header class="pb-4">
        <div class="container-fluid bg-netflix">
            <div class="m-0 px-3 d-flex align-items-center">
                <img src="/logo.png" alt="Maliflix" class="px-3 py-2" @click="this.store.moviesList = []">
                <form @submit.prevent="searchEvent()" class="py-4">
                    <input type="text" v-model="store.researchInput">
                    <button type="submit" class="mx-3 p-1">Cerca</button>
                </form>
            </div>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/Header.scss';
</style>
