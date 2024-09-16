import { reactive } from 'vue';

export const store = reactive({
    researchInput: "",
    moviesList: {},
    mainLanguages: [
        "it", "es", "fr", "ua", "us", "pt", "be", "al", "et", "eu"
    ]
});