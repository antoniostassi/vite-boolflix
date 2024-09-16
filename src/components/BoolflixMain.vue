<script>
    import { store } from '../store.js';

    export default {
        data(){
            return{
                store
            }
        },
        methods: {
            calculateVote(vote) {
                let newVote = parseInt(vote / 2);
                let decimalSection = (vote + "").split(".")[1];
                console.log(vote);
                if (decimalSection > 500 ){ newVote ++;};
                return newVote;
            }
        }
    }
</script>

<template>
    <main>
        <div class="container-xxl border">
            <div v-for="(movie, index) in store.moviesList" :key="index"> 
                <p>Titolo: {{ movie.name }}{{ movie.title }}</p>
                <p>Titolo Originale: {{ movie.original_title }}</p>
                <p>Lingua: {{ movie.original_language }}</p>
                <p>Voto: {{ calculateVote(movie.vote_average) }}</p>
                <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="">
                <p>--</p>
            </div>
        </div>
        
    </main>
</template>

<style lang="scss" scoped>
    p {
        margin:0;
        padding:0;
    }
</style>
