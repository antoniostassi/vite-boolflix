
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
            axios.get('https://api.themoviedb.org/3/trending/tv/week?language=it-IT', {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then((res) => {
                this.store.bestList = res.data.results;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        methods:{
            callApiParams() {
                axios.get('https://api.themoviedb.org/3/search/movie?include_adult=false&language=it-IT&page=1', { // Movies
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                params: {
                    query: this.store.researchInput
                }
                })
                .then((res) => {
                    this.store.moviesList = res.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })

                this.getApi(this.store.researchInput, "tv");
                
            },
            getApi(param, category) {
                axios.get(`https://api.themoviedb.org/3/search/${category}?include_adult=false&language=it-IT&page=1`, { // TV
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                params: {
                    query: param
                }
                })
                .then((res) => {
                    if (category == "tv") {
                        console.log("Hello!")
                        this.store.seriesList = res.data.results;
                    } else if(category == "movie") {
                        this.store.moviesList = res.data.results;
                    }
                    
                })
                .catch((error) => {
                    console.log(error);
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
