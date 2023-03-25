<template>
    <div class="home">
      <NavLayout />
      <main class="main-container">
        <SignesList :category-id="categoryId" :category-name="categoryName" />
      </main>
    </div>
  </template>
  
  <script>
  import NavLayout from "@/components/NavLayout.vue";
  import SignesList from "@/components/SignesList.vue";
  import SignService from "@/services/SignService.js";
  
  export default {
    name: "CategDetailView",
    components: {
      NavLayout,
      SignesList,
    },
    props: {
      categoryId: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        categoryName: null,
      };
    },
    async created() {
      const category = await SignService.getCategoryById(this.categoryId);
      this.categoryName = category.name;
    },
  };
  </script>
  