<template>
    <div class="home">
      <NavLayout/>
      <main class="main-container">
        <h1>Login</h1>
      </main>
      <!--FooterLayout/-->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavLayout from '@/components/NavLayout.vue';
 
  
  export default {
    name: 'RegistrationView',
    components: {
      NavLayout,
    }
  }
  </script>
  