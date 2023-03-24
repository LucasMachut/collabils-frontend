<template>
    <div @click="navigateToSigns">
      <h3>{{ category.name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name:"CategoryLayout",
    props: {
      category: Object,
    },
    methods: {
      navigateToSigns() {
        this.$router.push({ name: 'Signs', params: { categoryId: this.category.id } });
      },
    },
  };
  </script>
  