<template>
    <div>
        <h2>Les catégories</h2>
        <Category v-for="category in categories" :key="category.id" :category="category" />
    </div>
</template>

<script>
import apiService from '@/services/apiService';
import Category from '@/components/Category.vue';

export default {
    name:"CategoriesLayout",
    components: {
        Category,
    },
    data() {
        return {
            categories: [],
        };
    },
    async created() {
        try {
            const response = await apiService.getCategories();
            this.categories = response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des catégories:', error);
        }
    },
};
</script>
  