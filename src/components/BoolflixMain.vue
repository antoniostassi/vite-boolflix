<script>
    import { store } from '../store.js';
    import BoolflixSingleCard from './BoolflixSingleCard.vue';

    export default {
        data(){
            return{
                store
            }
        },
        methods: {
        },
        components: {
            BoolflixSingleCard
        }
    }
</script>

<template>
    <main>
        <div class="container-xxl border">
            <div v-if="this.store.moviesList[0] == undefined">
                <h1>TV Series of the Week:</h1>
                <BoolflixSingleCard 
                v-for="(hits, index) in store.bestList" :key="index"
                :title="hits.name"
                :originalTitle="hits.original_name"
                :language="hits.original_language"
                :voteAverage="hits.vote_average"
                :poster="hits.poster_path"
                />
            </div>

            <div v-if="this.store.moviesList[0] != undefined">
                <h1>Movies:</h1>
                <BoolflixSingleCard
                v-for="(movie, index) in store.moviesList" :key="index"
                :title="movie.title"
                :originalTitle="movie.original_title"
                :language="movie.original_language"
                :voteAverage="movie.vote_average"
                :poster="movie.poster_path"
                />

                <h1>Series:</h1>
                <BoolflixSingleCard 
                v-for="(serie, index) in store.seriesList" :key="index"
                :title="serie.name"
                :originalTitle="serie.original_name"
                :language="serie.original_language"
                :voteAverage="serie.vote_average"
                :poster="serie.poster_path"
                />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>
