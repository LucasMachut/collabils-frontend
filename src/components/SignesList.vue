<template>
  <div>
    <h2>{{ categoryName }}</h2>
    <ul>
      <li v-for="sign in signs" :key="sign.id">
        <router-link :to="'/signedetail/' + sign.id">{{ sign.title.rendered }}</router-link>
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
      signs: [],
    };
  },
  async created() {
    this.signs = await SignService.getSignsByCategoryId(this.categoryId);
  },
};
</script>