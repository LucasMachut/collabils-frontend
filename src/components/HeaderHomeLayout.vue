<template>
    <header class="header">
        <div class="presentation-container">
            <h1>Collabils</h1>
            <h2>Site collaboratif de recherche et partage de lexique en langue des signes française</h2>
            <a href="page-de-connexion.html"><button class="bouton1">Se connecter</button></a>

        </div>
        <div class="image-container">
            <img src="../assets/headerCollabils.png" alt="people sharing ideas">
        </div>
    </header>
</template>

<script>


export default {
    name: "HeaderHomeLayout",
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .presentation-container{
        height: 100vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 5%;
        margin: 10%;
    }
    .image-container{
        width: 40%;
        display: flex;
        justify-content: center;
    }
    .image-container img{
        width: 100%;
    }

</style>