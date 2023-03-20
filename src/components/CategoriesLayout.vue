<template>
  <div class="container">
    <h1>Catégories</h1>
    <ul>
      <li v-for="category in categories" :key="category.id" @click="goToCategory(category.id)">
        <a :href="'http://localhost:8080/category/' + category.id">
          <div class="categ-item">
            <h2>{{ category.name }}</h2>
          </div>
        </a>  
      </li>
    </ul>
  </div>
</template>

<script>
import CategoryService from '@/services/CategoryService';

export default {
  name: 'CategoryList',
  data() {
    return {
      categories: [],
    };
  },
  created() {
    this.loadCategories();
  },
  methods: {
    loadCategories() {
      CategoryService.getCategories().then((response) => {
        this.categories = response.data;
      });
    },
    goToCategory(categoryId) {
      this.$router.push(`/category/${categoryId}`);
    },
  },
};
</script>

<style>
  .container{
    width: 80%;
    margin: 5em auto;
  }
  ul{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  li{
    width: 25%;
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em;
    border: solid 1px white;
  }
  li:hover{
    background-color: rgb(242,139,0);
    width: 30%;
    transition: 8ms ease-in-out;
  }
  .categ-item{
    width: 25%;
    height: 25%;
  }
</style>
