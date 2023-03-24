<template>
    <div>
      <h1>Tous les signes</h1>
      <div>
        <input type="text" v-model="search" placeholder="Rechercher par titre">
      </div>
      <ul>
        <li v-for="signe in signesFiltered" :key="signe.id">
          <router-link :to="'/signes/' + signe.id">{{ signe.title.rendered }}</router-link> - {{ signe.date }}
        </li>
      </ul>
    </div>
  </template>
  <script>
  import signesService from "@/services/SignService.js";
  
  export default {
    name: "AllSignes",
    data() {
      return {
        signes: [],
        search: '',
      };
    },
    async created() {
      this.signes = await signesService.findAll();
    },
    computed: {
      signesFiltered() {
        return this.signes.filter(signe => signe.title.rendered.toLowerCase().includes(this.search.toLowerCase()))
                          .sort((a, b) => new Date(b.date) - new Date(a.date));
      },
    },
  };
  </script>