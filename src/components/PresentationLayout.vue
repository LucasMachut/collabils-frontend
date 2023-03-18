<template>
    <div>
        <h2>Bienvenue!</h2>
        <div class="presentation">
            <div class="presentation-image">
                <img src="../assets/logoCollabilsDetoure.png" alt="peaople sharing ideas colorful">
            </div>
            <div class="presentation-text">
                <p>Collabils est une plateforme dédiée aux professionnels de la langue des signes pour leur permettre d'échanger des informations sur des questions lexicales. Ce site a pour objectif premier de rescencer tous les signes existant, ainsi que leurs variations, les néologismes et les codes non officiels utilisés par des membres de la communauté signante. Il est possible de consulter les signes classés par catégories, mais également de demander un signe ou d'en proposer pour alimenter la base de donnée. Nous sommes convaincus que le partage de lexique est un moyen efficace pour tendre vers une amélioration de la qualité d'interprétation/traduction, nous comptons donc sur vous pour partager vos connaissances avec la communauté !  </p>
                <a href="page-de-connexion.html"><button class="bouton1">Se connecter</button></a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "PresentationLayout",

}
</script>

<style scoped>
    .presentation{
        display: flex;
        justify-content: center;
    }
    .presentation-text{
        width: 60%;
        padding: 10% 5%;
        text-align: center;
    }
    p {
        font-size: medium;
    }
    .presentation-image{
        width:40%;
        border-radius: 50%;
        box-shadow: rgba(139, 199, 210, 0.663) 0px 4px 6px -1px, rgba(221, 150, 244, 0.502) 0px 2px 4px -1px;
        margin: 5%;
        }
    .presentation-image img{
        width:100%;
    }
    
</style>