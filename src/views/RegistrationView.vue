<template>
    <div class="home">
      <NavLayout/>
      <main class="main-container">
        <h1>Registration</h1>
        <RegistrationFormLayout/>

      </main>
      <!--FooterLayout/-->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavLayout from '@/components/NavLayout.vue';
  import RegistrationFormLayout from '@/components/RegistrationFormLayout.vue';
 
  
  export default {
    name: 'RegistrationView',
    components: {
      NavLayout,
      RegistrationFormLayout
    }
  }
  </script>
  