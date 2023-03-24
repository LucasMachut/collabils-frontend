<template>
    <div class="home">
      <NavLayout/>
      <main class="main-container">
          <SignDetailedLayout/>
      </main>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SignDetailedLayout from '@/components/SignDetailedLayout';
  import NavLayout from '@/components/SignDetailedLayout';
  
  export default {
    name: 'SignDetailedView',
    components: {
      NavLayout,
      SignDetailedLayout,
    }
  }
  </script>
  