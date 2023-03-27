<template>
  <div class="signes-list">
    <h1>Tous les Signes</h1>
    <div class="search-container">
      <label for="search">Recherche : </label>
      <input type="text" id="search" v-model="searchQuery">
    </div>
    <div class="display-signs-container">
      <div class="sign-item" v-for="signe in filteredSignes" :key="signe.id">
        <a @click="showSigneDetails(signe.id)">
          <h3>{{ signe.title }}</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import SignService from '@/services/SignService.js';

export default {
  name: 'SignesAll',
  data() {
    return {
      signes: [],
      searchQuery: ''
    };
  },
  async mounted() {
    this.signes = await SignService.findAll();
  },
  computed: {
    filteredSignes() {
      return this.signes.filter(signe => {
        return signe.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    showSigneDetails(id) {
      this.$router.push({ name: 'SigneDetails', params: { id } });
    },
  },
};
</script>

<style scoped>
  .search-container {
    margin: 5em auto;
    text-align: center;
  }

  .display-signs-container{
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  .sign-item{
    width: 20%;
    height: 20vh;
    border: solid 1px white;
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign-item:hover{
    box-shadow: #FD3C00 0px 7px 29px 0px;
    }
  h3{
    color: white;
  }
</style>
