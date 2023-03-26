<template>
    <div class="container-signe-title">
            <router-link v-bind:to="{name: 'signe', params: {id: id}}">
                <h2 v-html="title"></h2>
            </router-link>
        </div>
</template>

<script>
export default {
    name: "SigneTitle",
    // Definit des propriétés qui sont fournis par le parent
    props: {
        title: String,
        id: Number
    }
}
</script>

<style scoped>
    .container-signe-title{
        width: 50px;
        height: 50px;
        color: white;
        border: solid 1px white;
    }
</style>
