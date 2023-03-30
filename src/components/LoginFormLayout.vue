<template>
    <div v-on:keyup.enter="login">
        <fieldset>
          <div class="field">
            <label class="field__label">Adresse e-mail / pseudo</label>
            <input class="field__input" v-model="pseudo" type="text">
            <ul class="field__error-list">
              <li>{{ pseudoError }}</li>
            </ul>
          </div>
          <div class="field field--error">
            <label class="field__label">Mot de passe</label>
            <input class="field__input" v-model="password" type="password">
            <ul class="field__error-list">
              <li>{{ passwordError }}</li>
            </ul>
          </div>
        </fieldset>
            <!--<div class="alert error">Le mot de passe est incorrect</div>-->
    <button class="button" v-on:click="login">Connexion</button>
</div>
</template>
<script>
import UserService from '@/services/UserService';

export default {
    name: "LoginFormLayout",
    data() {
        return {
            passwordError: null,
            pseudoError: null,
            pseudo: null,
            password: null
        }
    },
    methods: {
        async login() {
            if(!this.pseudo) {
                this.pseudoError = "Email / pseudo ne peut pas être vide";
            } else {
                this.pseudoError = null;
            }

            if(!this.password) {
                this.passwordError = "Mot de passe ne peut pas être vide";
            } else {
                this.passwordError = null;
            }

            if(!this.passwordError && !this.pseudoError) {
                // Requete Ajax pour connexion utilisateur
                const response = await UserService.login({
                  username: this.pseudo,
                  password: this.password
                })
                if(response.success === true) {
                  // On execute une mutation pour stocker le token dans le sessionStorage
                  // Et le synchroniser avec le store afin de rendre notre store.token reactif
                  this.$store.commit('setToken', response.data.token);
                  const roles = await UserService.getRoles(response.data.id);
                  this.$store.commit('setRole', roles.roles[0]);
                  // On fait une redirection
                  this.$router.push({name: 'home'});
                } else {
                  alert(response.message)
                }
            }
        }
    }
}
</script>

<style scoped>

.field {
    padding: 1rem;
    margin: 0.5rem;
    display: inline-block;
    width: 45%;
  }
  
  .field__label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .field__input {
    width: 100%;
    transition: all 0.3s ease;
  }
  
  .field__error-list li {
    color: red;
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
  
  .field--error .field__input {
    border: 2px solid red;
  }
  
  fieldset {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 2px solid #F58E02;
    box-shadow: 0 5px 5px #0000001a;
  }
  
  button {
    display: block;
    margin: 2rem auto;
    font-size: 1.2rem;
    padding: 0.5em;
    border-radius: 5px;
    border: 1px solid #F58E02;
    box-shadow: 0 5px 5px #0000001a;
  }
  
  button:hover {
    color: white;
    background-color: #F58E02;
    box-shadow: 0 2px 2px #0000001a;
  }
  
  label {
    color: white;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 0.5em;
    margin: 0.5em 0;
    border: 1px solid #F58E02;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  input[type="text"]:focus,
  input[type="password"]:focus {
    outline: none;
    border-color: #F58E02;
    box-shadow: 0 0 5px #F58E02;
  }
  
  .alert {
    margin: 1rem 0;
    padding: 0.5rem;
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
    border-radius: 0.25rem;
  }
  
</style>