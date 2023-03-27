<template>
    <div>
      <h2>{{ signe.title.rendered }}</h2>
      <div v-html="signe.content.rendered"></div>
      <ul>
        <li><strong>Date :</strong> {{ signe.meta._signe_date }}</li>
        <li><strong>Contexte :</strong> {{ signe.meta._signe_context }}</li>
        <li><strong>URL de la vidéo :</strong> {{ signe.meta._signe_video }}</li>
      </ul>
    </div>
  </template>
  <script>
  import SignService from "@/services/SignService.js";
  
  export default {
    name: "SigneLayout",
    data() {
      return {
        signe: null,
      };
    },
    async created() {
      const signeId = this.$route.params.id;
      this.signe = await SignService.getSigneById(signeId);
    },
  };
  </script>

