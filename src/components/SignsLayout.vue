<template>
    <h1>Rechercher un signe</h1>
    <input type="text" v-model="searchString">

    <div class="container">
        <SignLayout v-bind:id="sign.id" v-bind:title="sign.title.rendered" v-for="sign in signsList" v-bind:key="sign.id"/>
    </div>
</template>

<script>
//._embedded.wp:featuredmedia[0].source_url
import SignLayout from './SignLayout.vue';
import SignsService from '@/services/SignsService';

export default {
    components: { 
        SignLayout
    },
    name: "SignsLayout",
    // Contient le code executé avant que le composant soit mounted
    async mounted() {
        console.log('MOUNTED');
        // Contient la liste des recettes renvoyées par notre API
        this.signs = await SignsService.findAll();
    },
    computed: {
        signsList() {
            // Renvoit un tableau qui contient les lignes ou la callback a renvoyé true
            return this.signs.filter((sign) => {
                // On prend le titre de la recette en cours et on verifie si le terme recherché
                // Est contenue dans ce titre.
                // Si oui, on renvoit true
                if(sign.title.rendered.toLowerCase().includes(this.searchString.toLowerCase())) {
                    return true;
                } else {
                    return false;
                    // On verifie que dans la liste des ingredients, il y en a un qui
                    // correspond au champ de recherche
                    //return recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(this.searchString.toLowerCase()));
                }
            });
        }
    },
    data() {
        return {
            searchString: "",
            signs: []
        }
    }
}
</script>

<style scoped>
    .container{
        width: 80%;
        margin: 5em auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    input{
        width: 50%;
        height: 2rem;
        margin: 5rem auto;
        display: block;    
        display: flex;

}
</style>