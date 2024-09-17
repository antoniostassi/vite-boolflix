
<script>

    import BoolflixHeader from './components/BoolflixHeader.vue';
    import BoolflixMain from './components/BoolflixMain.vue';

    import axios from 'axios';
    import { store } from './store.js';
    import { token } from './apikey.js';

    export default {
        data(){
            return{
                store,
                token
            }
        },
        components:{
            BoolflixHeader,
            BoolflixMain
        },
        created(){
            axios.get('https://api.themoviedb.org/3/trending/all/day?language=it-IT', {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then((res) => {
                this.store.moviesList = res.data.results;
                console.log(res.data.results, typeof res.data);
            })
            .catch((error) => {
                console.error(error)
            })
        },
        methods:{
            callApiParams() {
                axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=it-IT&page=1', {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                params: {
                    query: this.store.researchInput
                }
            })
            .then((res) => {
                console.log(res.data.results);
                this.store.moviesList = res.data.results;
            })
            .catch((error) => {
                console.error(error)
            })
            }
        }
    };

</script>

<template>
    <BoolflixHeader @searchingEvent="callApiParams"/>
    <BoolflixMain/>
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";
</style>
