<template>
    <div class="home">
        <NavLayout />
        <main class="main-container">
            <SignesAll />
        </main>
        <!--FooterLayout/-->
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavLayout from '@/components/NavLayout.vue';
import SignesAll from '../components/SignesAll.vue';

export default {
    name: 'CategListView',
    components: {
        NavLayout,
        SignesAll
    }
}
</script>
  
