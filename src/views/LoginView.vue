<template>
    <div class="home">
      <NavLayout/>
      <main class="main-container">
        <h1>Login</h1>
        <LoginFormLayout/>
      </main>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavLayout from "@/components/NavLayout";
  import LoginFormLayout from '@/components/LoginFormLayout';
  
  export default {
    name: 'LoginView',
    components: {
      NavLayout,
      LoginFormLayout,
    }
  }
  </script>
  