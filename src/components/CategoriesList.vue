<template>
    <div>
      <h2>Catégories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="'/categories/' + category.id">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  <script>
  import SignService from "@/services/SignService.js";
  
  export default {
    name: "CategoriesList",
    data() {
      return {
        categories: [],
      };
    },
    async created() {
      this.categories = await SignService.getAllCategories();
    },
  };
  </script>