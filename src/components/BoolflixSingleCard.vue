<script>
    import {store} from '../store.js';
    export default {
        data(){
            return{
                store
            }
        },
        props: {
            title:String,
            originalTitle:String,
            language:String,
            voteAverage:Number,
            poster:String,

        },
        methods: {
            calculateVote(vote) {
                let newVote = parseInt(vote / 2);
                let decimalSection = (vote + "").split(".")[1];
                if (decimalSection > 500 ){ newVote ++;};
                return newVote;
            },
            createFlag(prefix) {

                const baseURL = "https://flagcdn.com/16x12/";
                let newURL;
                if(this.store.mainLanguages.includes(prefix)) {
                    newURL = baseURL + prefix + ".png";
                } else if (prefix == "en"){
                    newURL = "https://flagcdn.com/16x12/us.png";
                } else {
                    newURL = "https://flagcdn.com/16x12/eu.png";
                }
                return newURL;
            }
        }
    }
</script>

<template>
    <p>Titolo: {{ title }}</p>
    <p>Titolo Originale: {{ originalTitle }}</p>
    <div>
        <p>Lingua:</p>
        <img :src="createFlag(language)" :alt="originalTitle">
    </div>
    <p>Voto: {{ calculateVote(voteAverage) }}</p>
    <div class="moviePoster border" :style="{
        backgroundImage:`url('https://image.tmdb.org/t/p/w780/${poster}')`
        }">
    </div>
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
