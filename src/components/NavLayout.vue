<template>
  <nav :class="{ 'nav-show': showNav }">
    <router-link v-bind:to="{name: 'home'}">Accueil</router-link>
    <router-link v-bind:to="{name: 'signes'}">Rechercher un signe</router-link>
    <router-link v-bind:to="{name: 'category'}">Catégories</router-link>


              <!--<router-link v-for="route in routes" v-bind:key="route.route" v-bind:to="{name: route.route}">{{ route.display }}</router-link>-->
  <!-- 
              <router-link v-bind:to="{name: 'home'}">Recipes list</router-link>
              <router-link v-if="this.$store.getters.getToken" v-bind:to="{name: 'newRecipe'}">Create Recipe</router-link>
              <router-link v-if="this.$store.getters.getToken && this.$store.getters.getRole !== 'contributor'" v-bind:to="{name: 'draftRecipes'}">Draft recipes</router-link>
              <router-link v-if="!this.$store.getters.getToken" v-bind:to="{name: 'registration'}">Registration</router-link>
              <router-link v-if="!this.$store.getters.getToken" v-bind:to="{name: 'login'}">Login</router-link> -->
    </nav>
  </template>
  
  <script>
  export default {
      name: "NavLayout",
      data() {
    return {
      prevScrollpos: window.pageYOffset,
      showNav: true,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (this.prevScrollpos > currentScrollPos) {
        this.showNav = true;
      } else {
        this.showNav = false;
      }
      this.prevScrollpos = currentScrollPos;
    },
  },
};
</script>



  
  <style scoped>
    nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #17132B;
  box-shadow: rgba(255, 255, 255, 0.66) 0px 3px 8px;
  padding: 10px;
  transition: top 0.3s;
  display: flex;
  justify-content: space-around;
}
a{
    color: #F58E02;
}
.nav a.router-link-exact-active{
  color: #00CDFF;
  font-weight: bolder;
}

.nav-show {
  top: -100px;
}
</style>

