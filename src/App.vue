
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
           
        }
    };

</script>

<template>
    <BoolflixHeader/>
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";
    
</style>
