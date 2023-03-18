<template>
  <div class="home">
    <NavLayout/>
    <main class="main-container">
      <SignsLayout/>
    </main>
    <!--FooterLayout/-->
  </div>
</template>

<script>
// @ is an alias to /src
import NavLayout from '@/components/NavLayout.vue';
import SignsLayout from '../components/SignsLayout.vue';

export default {
  name: 'SignsView',
  components: {
    SignsLayout,
    NavLayout,
  }
}
</script>
