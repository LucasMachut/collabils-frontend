<template>
    <div>
      <h2>{{ categoryName }}</h2>
      <ul>
        <li v-for="signe in signes" :key="signe.id">
          <router-link :to="'/signes/' + signe.id">{{ signe.title.rendered }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  <script>
  import SignService from "@/services/SignService.js";
  
  export default {
    name: "SignesList",
    props: {
      categoryId: {
        type: Number,
        required: true,
      },
      categoryName: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        signes: [],
      };
    },
    async created() {
      this.signes = await SignService.getSignesByCategoryId(this.categoryId);
    },
  };
  </script>