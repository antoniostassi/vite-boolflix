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
        <div class="container-fluid bg-danger">
            <div class="m-0 px-3">
                <form @submit.prevent="searchEvent()" class="py-4">
                    <input type="text" v-model="store.researchInput">
                    <button type="submit">Cerca</button>
                </form>
            </div>
            
        </div>
    </header>
</template>


