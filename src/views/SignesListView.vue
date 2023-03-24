<template>
    <div class="home">
        <NavLayout />
        <main class="main-container">
            <SignesList />
        </main>
        <!--FooterLayout/-->
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavLayout from '@/components/NavLayout.vue';
import SignesList from '../components/SignesList.vue';

export default {
    name: 'SignesListView',
    components: {
        NavLayout,
        SignesList
    }
}
</script>
  