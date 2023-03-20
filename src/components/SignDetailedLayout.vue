<template>
    <div>
        <h1>{{title}}</h1>
        <article class="sign">
            <section class="informations">
                <ul>
                    <li>catégorie ?</li>
                    <li>statut ?</li>
                </ul>
            </section>

            <section class="video">
                video
            </section>
            <section class="definition">
                <h2>Définition</h2>
                <div v-html="content"></div>
            </section>
            <section class="context">
                <h2>Contexte d'utilisation</h2>
                <div v-html="content"></div>
            </section>
        </article>
        <!-- v-if permet d'attendre que la data id soit remplie avant de charger le composant RecipeCommentsLayout-->
        <!-- Vu que ce composant dépend de l'id de la recette, on doit atteindre que la requete ai eu une réponse -->
        <RecipeCommentsLayout v-if="id" v-bind:recipeId="id"/>
    </div>
</template>

<script>
import RecipeService from "@/services/RecipeService";
import RecipeCommentsLayout from '@/components/recipe/RecipeCommentsLayout';
import RecipeDetailDeleteLayout from '@/components/recipe/RecipeDetailDeleteLayout.vue';

export default {
    name: "RecipeDetailLayout",
    components: {
        RecipeCommentsLayout,
        RecipeDetailDeleteLayout
    },
    data() {
        return {
            title: null,
            ingredients: [],
            content: null,
            image: null,
            id: null
        }
    },
    async mounted() {
        // Permet de recuperer le parametre dynamique id grace a l'objet $route
        let id = this.$route.params.id;
        const response = await RecipeService.find(id);
        if(response.code) {
            // IL y a une erreur
            alert(response.message);
            // @TODO Ajouter une redirection vers l'accueil avec un message d'erreur
        } else {
            this.id = response.id;
            this.title = response.title.rendered;
            this.content = response.content.rendered;
            this.image = response.featured_media ? response._embedded['wp:featuredmedia'][0].source_url : 'https://source.unsplash.com/collection/157&random=100';
            this.ingredients = response._embedded['wp:term'][0];
        }
    }
}
</script>

<style scoped>
.media-image {
  min-height: 300px;
  background-position: center;
  background-size: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.article {
  text-align: left;
  text-align: left;
  background-color: #f0f4ee;
  border-radius: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  box-shadow: 0 5px 5px #0000001a;
}

.article .text-content {
  padding: 0 30px;
}

.article .media-image {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  border-radius: 1rem 1rem 0 0;
  margin: auto;
  display: block;
}
</style>