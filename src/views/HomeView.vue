<template>
  <div class="home">
    <HeaderLayout/>
    <main class="main-container">
      <PresentationLayout/>
    </main>
    <!--FooterLayout/-->
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLayout from "@/components/HeaderLayout";
import PresentationLayout from '../components/PresentationLayout.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderLayout,
    PresentationLayout,
  }
}
</script>
