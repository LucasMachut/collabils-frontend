<template>
    <div class="category-signs">
      <h1>{{ category.name }}</h1>
      <div class="signs-container">
        <div class="sign-item" v-for="signe in signes" :key="signe.id">
          <router-link :to="{ name: 'SigneDetails', params: { id: signe.id } }">
            <h3>{{ signe.title }}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  <script>
  import SignService from "@/services/SignService.js";
  
  export default {
    name: "SignsByCateg",
    data() {
      return {
        category: {},
        signes: [],
      };
    },
    async created() {
      const categoryId = this.$route.params.id;
      this.category = await SignService.getCategoryById(categoryId);
      this.signes = await SignService.getSignsByCategoryId(categoryId);
    },
  };
  </script>
  <style scoped>
    .category-signs {
      max-width: 800px;
      margin: 0 auto;
      padding: 30px;
      text-align: center;
    }
  
    h1 {
      font-size: 36px;
      margin-bottom: 30px;
    }
  
    .signs-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    }
  
    .sign-item {
      width: 20%;
      height: 20vh;
      border: solid 1px white;
      margin: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .sign-item:hover {
      box-shadow: #fd3c00 0px 7px 29px 0px;
    }
  
    h3 {
      color: white;
    }
  </style>