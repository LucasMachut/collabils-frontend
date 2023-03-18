<template>
    <div class="posts">
      <div v-for="post in posts" :key="post.id" class="post">
        <h2>{{ post.title.rendered }}</h2>
        <div v-html="post.content.rendered"></div>
      </div>
    </div>
  </template>
  
  <script>
  import postService from '@/services/SignsService';
  
  export default {
    name: 'SignsLayout',
    data() {
      return {
        posts: [],
      };
    },
    mounted() {
      this.loadPosts();
    },
    methods: {
      loadPosts() {
        const categoryId = this.$route.params.id;
        postService.getPostsByCategory(categoryId).then(response => {
          this.posts = response.data;
        });
      },
    },
  };
  </script>
  
  <style>
  .posts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
  
  .post {
    border: 1px solid black;
    padding: 20px;
  }
  </style>
  