
<script>

    import BoolflixHeader from './components/BoolflixHeader.vue';
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
            BoolflixHeader
        },
        created(){
            console.log(this.token);

            axios.get('https://api.themoviedb.org/3/trending/all/day?language=it-IT', {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
            })
            .then((res) => {
            console.log(res.data)
            })
            .catch((error) => {
            console.error(error)
            })
        }
    };

</script>

<template>
    <BoolflixHeader/>
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";
    
</style>
