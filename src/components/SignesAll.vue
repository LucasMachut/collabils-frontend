<template>
  <div class="signes-list">
    <h1>Tous les Signes</h1>
    <ul>
      <li v-for="signe in signes" :key="signe.id">
        <a @click="showSigneDetails(signe.id)">
          {{ signe.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import SignService from '@/services/SignService.js';

export default {
  name: 'SignesAll',
  data() {
    return {
      signes: [],
    };
  },
  async mounted() {
    this.signes = await SignService.findAll();
  },
  methods: {
    showSigneDetails(id) {
      this.$router.push({ name: 'SigneDetails', params: { id } });
    },
  },
};
</script>
<style scoped>
.signes-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
}

h1 {
  font-size: 36px;
  margin-bottom: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: #333;
  font-size: 24px;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s ease-in-out;
}

a:hover {
  border-bottom: 2px solid #333;
}
</style>