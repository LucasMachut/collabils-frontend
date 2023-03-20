<template>
    <div>
      <h1>Liste des articles de la catégorie "{{ categorySlug }}"</h1>
      <PostsByCategory/>
      <!-- ... -->
    </div>
  </template>
  
  
  <script>
  import PostsByCategory from '@/components/PostsByCategory'
  
  export default {
    name:"SignsByCategView",
    components: {
        PostsByCategory
    }
  }
  </script>
  