<template>
    <div class="home">
      <NavLayout/>
      <main class="main-container">
          <h1>Créer un compte</h1>
          <RegistrationFormLayout/>
      </main>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavLayout from "@/components/NavLayout";
  import RegistrationFormLayout from '@/components/RegistrationFormLayout';
  
  export default {
    name: 'RegistrationView',
    components: {
      NavLayout,
      RegistrationFormLayout
    }
  }
  </script>
  