<template>
    <div class="home">
        <NavLayout />
        <main class="main-container">
            <CategoriesList />
        </main>
        <!--FooterLayout/-->
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavLayout from '@/components/NavLayout.vue';
import CategoriesList from '@/components/CategoriesList.vue';

export default {
    name: 'CategListView',
    components: {
        NavLayout,
        CategoriesList
    }
}
</script>
  