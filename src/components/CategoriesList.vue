<template>
    <h2>Catégories</h2>
    <div class="categ-container">
        <div class="categ-item" v-for="category in categories" :key="category.id">
          <router-link :to="'/categories/' + category.id">
              <h3>{{ category.name }}</h3>
          </router-link>
        </div>
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

<style>
  .categ-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 85%;
    height: 100vh;
    margin: auto;
  }
  .categ-item {
    color: white;
    width: 25%;
    height: 25%;
    border: solid 1px white;
    margin: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .categ-item:hover{
    width: 30%;
    box-shadow: #FF3E00 0px 7px 29px 0px;
  }

</style>