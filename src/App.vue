
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
                this.getApi(this.store.researchInput, "movie")
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
    body {
        background-color: black;
    }
</style>
