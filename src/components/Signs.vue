<template>
    <div>
      <h2>Les signes de la catégorie sélectionnée</h2>
      <Sign v-for="sign in signs" :key="sign.id" :sign="sign" />
    </div>
  </template>
  
  <script>
  import apiService from '@/services/apiService';
  import Sign from '@/components/Sign.vue';
  
  export default {
    components: {
      Sign,
    },
    data() {
      return {
        signs: [],
      };
    },
    async created() {
      try {
        const response = await apiService.getSignsByCategoryId(this.$route.params.categoryId);
      this.signs = response.data;
    } catch (error) {
      console.error("Erreur lors de la récupération des signes:", error);
    }
  },
};
</script>
  