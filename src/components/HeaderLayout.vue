<template>
    <header class="header">
        <div class="presentation-container">
            <h1>Collabils</h1>
            <h2>Site de collaboratif de recherche et partage de lexique en langue des signes française</h2>
            <a href="page-de-connexion.html"><button class="bouton">Se connecter</button></a>

        </div>
        <div class="image-container">
            <img src="../assets/headerCollabils.png" alt="people sharing ideas">
        </div>
    </header>
</template>

<script>

export default {
    name: "HeaderLayout",
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
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 5%;
    }
    .image-container{
        width: 40%;
        display: flex;
        justify-content: center;
    }
    .image-container img{
        width: 100%;
    }
    .bouton {
        background: rgb(223,196,225);
        background: linear-gradient(90deg, rgba(223,196,225,1) 0%, rgba(131,206,225,1) 86%);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        border-radius: 50px;
        width: 200px;
}


</style>