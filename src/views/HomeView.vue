<template>
  <div class="home">
    <NavLayout/>
    <HeaderHomeLayout/>
    <main class="main-container">
      <PresentationLayout/>
    </main>
    <!--FooterLayout/-->
  </div>
</template>

<script>
// @ is an alias to /src
import NavLayout from '@/components/NavLayout.vue';
import HeaderHomeLayout from "@/components/HeaderHomeLayout";
import PresentationLayout from '@/components/PresentationLayout.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderHomeLayout,
    PresentationLayout,
    NavLayout,
  }
}
</script>
