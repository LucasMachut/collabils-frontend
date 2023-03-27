<template>
  <h1>Catégories</h1>
  <div class="categ-container">
    <div class="categ-item" v-for="category in categories" :key="category.id">
      <router-link :to="'/category/' + category.id">
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

<style scoped>
  .categ-container{
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .categ-item{
    width: 20%;
    height: 20vh;
    border: solid 1px white;
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .categ-item:hover{
    box-shadow: #FD3C00 0px 7px 29px 0px;
    }
  h3{
    color: white;
  }
</style>