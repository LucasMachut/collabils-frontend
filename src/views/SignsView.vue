<template>
    <div class="post">
      <h1>{{ post.title.rendered }}</h1>
      <h2>Catégorie : {{ category.name }}</h2>
      <div v-html="post.content.rendered"></div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Post',
    data() {
      return {
        post: null,
        category: null,
      };
    },
    mounted() {
      this.loadPost();
    },
    methods: {
      loadPost() {
        const postId = this.$route.params.id;
        axios
          .all([this.getPost(postId), this.getCategory(postId)])
          .then(axios.spread((postResponse, categoryResponse) => {
            this.post = postResponse.data;
            this.category = categoryResponse.data;
          }))
          .catch(error => {
            console.log(error);
          });
      },
      getPost(postId) {
        return axios.get(`https://example.com/wp-json/wp/v2/posts/${postId}`);
      },
      getCategory(postId) {
        return axios.get(
          `https://example.com/wp-json/wp/v2/categories?post=${postId}`
        );
      },
    },
  };
  </script>
  
  <style>
  .post {
    max-width: 800px;
    margin: 0 auto;
  }
  </style>
  