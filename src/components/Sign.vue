<template>
    <div>
      <h4>{{ sign.title.rendered }}</h4>
    </div>
  </template>
  
  <script>
  export default {
    name:"SignLayout",
    props: {
      sign: Object,
    },
  };
  </script>
  