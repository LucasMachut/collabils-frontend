<template>
    <div class="home">
      <NavLayout/>
      <main class="main-container">
          <SignDetailLayout/>
      </main>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HeaderLayout from "@/components/template/NavLayout";
  import RecipeDetailLayout from '@/components/SignDetailedLayout';
  
  export default {
    name: 'SignDetailedView',
    components: {
      NavLayout,
      SignDetailedLayout,
    }
  }
  </script>
  