<template>
    <div>
      <NavLayout />
      <CategoriesLayout />
<!--       <Footer />
 -->    </div>
  </template>
  
  <script>
  import NavLayout from '@/components/NavLayout.vue';
  import CategoriesLayout from '@/components/CategoriesLayout.vue';
/*   import Footer from '@/components/Footer.vue';
 */  
  export default {
    components: {
      NavLayout,
      CategoriesLayout,
      /* Footer */
    },
  };
  </script>
  