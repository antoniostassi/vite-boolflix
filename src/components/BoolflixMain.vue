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
            },
            createFlag(prefix) {
                const baseURL = "https://flagcdn.com/16x12/";
                let newURL;
                console.log(prefix);
                if(this.store.mainLanguages.includes(prefix)) {
                    console.log("included");
                    newURL = ""+ baseURL + prefix + ".png";

                } else {

                    newURL = "https://flagcdn.com/16x12/eu.png";

                }

                return newURL;

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
                <div>
                    <p>Lingua:</p>
                    <img :src="createFlag(movie.original_language)" :alt="movie.original_title">
                </div>
                <p>Voto: {{ calculateVote(movie.vote_average) }}</p>
                <div class="moviePoster border" :style="{
                    backgroundImage:`url('https://image.tmdb.org/t/p/w780/${movie.poster_path}')`
                    }">
                </div>
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

    img {
        max-height: 100%;
    }

    .moviePoster {
        width:297px;
        background-size:cover;
        height: 440px;
    }
</style>
