<template>
    <div>
      <div>
          <p v-for="error in errors" v-bind:key="error">{{error}}</p>
      </div>
      <fieldset>
        <div class="field">
            <label class="field__label">Pseudo</label>
            <input class="field__input" v-model="pseudo" type="text" placeholder="johndoe">
        </div>
          <div class="field">
            <label for="lastname">Nom:</label>
            <input type="text" id="lastname" v-model="lastname">
          </div>
         <div class="field">
            <label for="firstname">Prénom:</label>
            <input type="text" id="firstname" v-model="firstname">
         </div>
         <div class="field">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email">
         </div>
         <div class="field">
            <label for="password">Mot de passe:</label>
            <input type="password" id="password" v-model="password">
         </div>
         <div class="field">
            <label class="field__label">Password confirmation</label>
            <input class="field__input" v-model="confPassword" type="password" placeholder="Confirm password">
        </div>
         <div class="field">
            <label for="role">Profession:</label>
            <select id="role" v-model="role">
                <option value="Interprète">Interprète</option>
                <option value="Intermédiateur">Intermédiateur</option>
                <option value="Traducteur">Traducteur</option>
                <option value="Professeur">Professeur</option>
                <option value="Autre">Autre</option>
            </select>
         </div>
         <div class="field">
            <label for="diplomaType">Type de diplôme obtenu et université:</label>
            <input type="text" id="diplomaType" v-model="diplomaType">
         </div>
         <div class="field">
            <label for="diplomaDate">Date de diplôme:</label>
            <input type="date" id="diplomaDate" v-model="diplomaDate">
         </div>
      </fieldset>
      
      <button v-on:click="sendForm" class="button">Enregistrer</button>
      </div>
  </template>
  
  <script>
  import UserService from "@/services/UserService";
  
  export default {
      name: "RegistrationFormLayout",
      data() {
          return {
              errors: [],
              pseudo: null,
              email: null,
              firstname: null,
              lastname: null,
              password: null,
              diplomaDate: null,
              diplomaType: null,
              role: null
          }
      },
      methods: {
          async sendForm() {
              this.errors = [];
              // Validation du contenu du formulaire
              if(!this.email) {
                  this.errors.push("Email cannot be empty");
              }
              if(!this.pseudo) {
                  this.errors.push("Pseudo cannot be empty");
              }
              if(!this.firstname) {
                  this.errors.push("Firstname cannot be empty");
              }
              if(!this.lastname) {
                  this.errors.push("Lastname cannot be empty");
              }
              if(!this.role) {
                  this.errors.push("Profession cannot be empty");
              }
              if(!this.diplomaDate) {
                  this.errors.push("Date de diplome cannot be empty");
              }
              if(!this.password) {
                  this.errors.push("Password cannot be empty");
              } else {
                  if(this.password !== this.confPassword) {
                      this.errors.push("The two passwords are not the same");
                  }
              }
              if(!this.profession) {
                  this.errors.push("Profession cannot be empty");
              }
  
              if(this.errors.length === 0) {
                  // Envoi de la requete vers l'API
                  const response = await UserService.register({
                      "email": this.email,
                      "password": this.password,
                      "role": this.role,
                      "firstname": this.firstname,
                      "lastname": this.lastname,
                      "profession": this.profession, 
                      "diplomaDate": this.diplomaDate,
                      "diplomaType": this.diplomaType
                  });
                  // Reception de la réponse et affichage
                  if(response.code === 200) {
                      // On remet a zéro le formulaire en cas de réussite
                      this.pseudo = null;
                      this.email = null;
                      this.password = null;
                      this.confPassword = null;
                      this.role = null;
                      this.firstname = null;
                      this.lastname = null;
                      alert('Registration done!');
                  } else {
                      alert(response.message);
                  }
              }
          }
      }
  }
  </script>
  
  <style scoped>
  .main-container {
    margin-top: 6rem;
  }
  .error {
    background-color: lightcoral;
    font-weight: bold;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  button {
    display: inline-block;
    width: 50%;
    font-size: 1.2rem;
    padding: 0.5em;
    margin: 0.2rem;
    border-radius: 5px;
    border: 1px solid #42b983;
    box-shadow: 0 5px 5px #0000001a;
  }
  
  button:hover {
    color: white;
    background-color: #42b983;
    box-shadow: 0 2px 2px #0000001a;
  }
  fieldset {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 2px solid #42b983;
    box-shadow: 0 5px 5px #0000001a;
  }
  .field {
    padding: 1rem;
    margin: 1rem;
  }
  .field__label {
    width: 50%;
    float: left;
  }
  .field__input {
    width: 50%;
    float: right;
  }
  </style>