<template>
    <article class="article">
        <router-link v-bind:to="{name: 'signs', params: {id: id}}">
                <h2 v-html="title"></h2>
        </router-link>

    </article>
</template>

<script>
export default {
    name: "SignLayout",
    // Definit des propriétés qui sont fournis par le parent
    props: {
        title: String,
        id: Number
    }
}
</script>

<style scoped>
    .container{
        width: 80%;
        margin: 5em auto;
    }
    article:hover{
        background-color: rgb(242,139,0);
        width: 30%;
        transition: 8ms ease-in-out;
    }
</style>