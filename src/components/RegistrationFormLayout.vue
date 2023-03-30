<template>
    <div>
      <div>
        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
      </div>
      <fieldset>
        <div class="field">
          <label class="field__label">Nom</label>
          <input class="field__input" v-model="nom" type="text" @focus="selectField">
        </div>
        <div class="field">
          <label class="field__label">Prénom</label>
          <input class="field__input" v-model="prenom" type="text" @focus="selectField">
        </div>
        <div class="field">
          <label class="field__label">Adresse e-mail</label>
          <input class="field__input" v-model="email" type="email" @focus="selectField">
        </div>
        <div class="field">
          <label class="field__label">Pseudo</label>
          <input class="field__input" v-model="pseudo" type="text" @focus="selectField">
        </div>
        <div class="field">
          <label class="field__label">Mot de passe</label>
          <input class="field__input" v-model="password" type="password" @focus="selectField">
        </div>
        <div class="field">
          <label class="field__label">Confirmation du mot de passe</label>
          <input class="field__input" v-model="confPassword" type="password" @focus="selectField">
        </div>
        <div class="field">
          <label class="field__label">Rôle</label>
          <select name="role" v-model="role" id="" @focus="selectField">
            <option value="">---</option>
            <option value="interprete">Interprète</option>
            <option value="etudiant">Etudiant</option>
          </select>
        </div>
        <div class="field">
          <label class="field__label">Université du diplôme</label>
          <input class="field__input" v-model="universite" type="text" @focus="selectField">
        </div>
        <div class="field">
          <label class="field__label">Date du diplôme</label>
          <input class="field__input" v-model="dateDiplome" type="date" @focus="selectField">
        </div>
      </fieldset>
      <button v-on:click="sendForm" class="button">Inscription</button>
    </div>
  </template>
<script>
import UserService from "@/services/UserService";

export default {
    name: "SignUpForm",
    data() {
        return {
            errors: [],
            nom: '',
            prenom: '',
            email: '',
            pseudo: '',
            password: '',
            confPassword: '',
            role: null,
            universite: '',
            dateDiplome: null
        }
    },
    methods: {
        async sendForm() {
            this.errors = [];
            // Validation du contenu du formulaire
            if (!this.nom) {
                this.errors.push("Le nom est obligatoire");
            }
            if (!this.prenom) {
                this.errors.push("Le prénom est obligatoire");
            }
            if (!this.email) {
                this.errors.push("L'adresse e-mail est obligatoire");
            }
            if (!this.pseudo) {
                this.errors.push("Pseudo ne peut pas être vide");
            }
            if (!this.password) {
                this.errors.push("Le mot de passe ne peut pas être vide");
            } else {
                if (this.password !== this.confPassword) {
                    this.errors.push("Les deux mots de passe ne sont pas identiques");
                }
            }
            if (!this.role) {
                this.errors.push("Le rôle ne peut pas être vide");
            }
            if (this.errors.length === 0) {
                // Envoi de la requête vers l'API
                const response = await UserService.register({
                    "pseudo": this.pseudo,
                    "email": this.email,
                    "password": this.password,
                    "role": this.role,
                    "firstname": this.firstname,
                    "lastname": this.lastname
                });
                // Réception de la réponse et affichage
                if (response.code === 200) {
                    // On remet à zéro le formulaire en cas de réussite
                    this.pseudo = null;
                    this.email = null;
                    this.password = null;
                    this.confPassword = null;
                    this.role = null;
                    this.firstname = null;
                    this.lastname = null;
                    alert('Inscription réussie!');
                } else {
                    alert(response.message);
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
  .field__input.selected {
    background-color: #F58E02;
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
  input[type="email"],
  input[type="password"],
  select {
    width: 100%;
    padding: 0.5em;
    margin: 0.5em 0;
    border: 1px solid #F58E02;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="date"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    position: relative;
    top: 0px;
    left: 0px;
    padding: 0px;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
  }
</style>