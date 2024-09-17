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

                const baseURL = "https://flagcdn.com/w40/";
                let newURL;
                if(this.store.mainLanguages.includes(prefix)) {
                    newURL = baseURL + prefix + ".png";
                } else if (prefix == "en"){
                    newURL = "https://flagcdn.com/w40/us.png";
                } else {
                    newURL = "https://flagcdn.com/w40/eu.png";
                }
                return newURL;
            }
        }
    }
</script>

<template>
    <div class="col">

        <div class="moviePoster mb-4" :style="{
            backgroundImage:`url('https://image.tmdb.org/t/p/w780/${poster}')`
            }">   
            <div class="card-information d-none p-2">
                <p id="card_title">{{ title }}</p>
                <p id="original_title">Titolo originale: {{ originalTitle }}</p>
                <p id="vote">{{ calculateVote(voteAverage) }}</p>
                <img :src="createFlag(language)" :alt="originalTitle">
            </div>
            
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @import '../assets/scss/SingleCard.scss';
</style>
