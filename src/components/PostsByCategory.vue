<template>
    <div>
      <h2>Articles de la catégorie {{ categoryId }}</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title.rendered }}</h3>
          <div v-html="post.excerpt.rendered"></div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import CategoryService from '@/services/CategoryService'
  
  export default {
    name:"PostsByCategory",
    data() {
      return {
        posts: []
      }
    },
    props: {
      categoryId: {
        type: Number,
        required: true
      }
    },
    mounted() {
      CategoryService.getPostsByCategory(this.categoryId)
        .then(response => {
          this.posts = response.data
        })
    }
  }
  </script>
  