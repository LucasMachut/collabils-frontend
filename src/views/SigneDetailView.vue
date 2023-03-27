<template>
    <div class="home">
        <NavLayout />
        <main class="main-container">
        </main>
        <!--FooterLayout/-->
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavLayout from '@/components/NavLayout.vue';

export default {
    name: 'SignDetailView',
    components: {
        NavLayout,
    }
}
</script>
  