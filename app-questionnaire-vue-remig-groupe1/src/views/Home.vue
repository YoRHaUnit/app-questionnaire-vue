<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  body {
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-weight: 100;
    font-size: 12px;
    line-height: 30px;
    color: #777;
    background: #4CAF50;
  }

  .container {
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea,
  #contact button[type="submit"] {
    font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
  }

  #contact {
    background: #F9F9F9;
    padding: 25px;
    margin: 150px 0;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  }

  #contact h3 {
    display: block;
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 10px;
  }

  #contact h4 {
    margin: 5px 0 15px;
    display: block;
    font-size: 13px;
    font-weight: 400;
  }

  fieldset {
    border: medium none !important;
    margin: 0 0 10px;
    min-width: 100%;
    padding: 0;
    width: 100%;
  }

  #contact input[type="text"],
  #contact input[type="email"],
  #contact input[type="tel"],
  #contact input[type="url"],
  #contact textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
  }

  #contact input[type="text"]:hover,
  #contact input[type="email"]:hover,
  #contact input[type="tel"]:hover,
  #contact input[type="url"]:hover,
  #contact textarea:hover {
    -webkit-transition: border-color 0.3s ease-in-out;
    -moz-transition: border-color 0.3s ease-in-out;
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  #contact textarea {
    height: 100px;
    max-width: 100%;
    resize: none;
  }

  #contact button[type="submit"] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: #4CAF50;
    color: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    font-size: 15px;
  }

  #contact button[type="submit"]:hover {
    background: #43A047;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }

  #contact button[type="submit"]:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .copyright {
    text-align: center;
  }

  #contact input:focus,
  #contact textarea:focus {
    outline: 0;
    border: 1px solid #aaa;
  }

  ::-webkit-input-placeholder {
    color: #888;
  }

  :-moz-placeholder {
    color: #888;
  }

  ::-moz-placeholder {
    color: #888;
  }

  :-ms-input-placeholder {
    color: #888;
  }
</style>
<template class="all">
  <div class="container">
    <div class="form-example" id="contact">
    <!-- Veillez a bien lire le README.txt pour être sûr de commencer la lecture du code au bon endroit -->
    <!-- Formulaire : la méthode submiteHandler() est appelée lors de l'envoi. Les valeurs des champs sont envoyées via l'URL (c'est un peu sale mais la découverte -->
    <!-- des variables sessions s'est faite tardivement. Elle seront utilisées plus tard dans le code pour la gestion du score -->
    <form class="" @submit="submitHandler" id="">
      <h1>Questionnaire Vue.js</h1><br>
      <div class="form-example">
        <input type="text" class="champ" name="first_name" id="first_name" v-model="first_name" required placeholder="Votre Prénom">
      </div><br>
      <div class="form-example">
        <input type="text" class="champ" name="last_name" id="last_name" v-model="last_name" required placeholder="Votre Nom">
      </div><br>
      <div class="form-example">
        <input type="text" class="champ" name="company" id="company" v-model="society" required placeholder="Votre Société">
      </div><br>
      <!--<div class="form-example">
        <label for="company">Votre société : </label>
        <input type="text" name="company" id="test" v-model="picked" required>
      </div>-->
      <div class="button-example" >
        <button type="submit" value="Valider" id="contact-submit">Valider</button>
        <br>
      </div>
    </form>
    <form @submit="adminHandler">
      <button type="submit" value="Valider" style="background-color: #F9F9F9; text-decoration: none; border-color: #F9F9F9; color: black; width: auto; height: auto;">Page d'administration</button>
    </form>
    <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
    </div>
  </div>
</template>
<script>
// import DataBaseConnection from '../components/DataBaseConnection'
// import Datetime from 'vue-datetime'

export default {
  name: 'Home',
  data () {
    // Initilisation des variables du formulaire qui seront à la fin du questionnaire, insérées dans pouchDB
    return {
      first_name: null,
      last_name: null,
      society: null,
      // Compteur des questions. Initialisé à 0 car le nombre de questions sera obtenu à la lecture du fichier question.json. A chaque nouvelle question, le compteur = compteur + 1
      // Lorsque le compteur atteint le nombre de questions présentes dans le fichier json, nous sommes redirigés à la page Resultats.vue.
      question: '0'
    }
  },
  methods: {
    submitHandler (event) {
      event.preventDefault()
      // redirection vers la page correspondante à la route suivante. (Voir le fichier index.js du package router)
      this.$router.push(`/questionnaire/${this.first_name}/${this.last_name}/${this.society}/${this.question}`)
    },
    adminHandler (event) {
      event.preventDefault()
      // redirection vers la page correspondante à la route suivante. (Voir le fichier index.js du package router)
      this.$router.push(`/admin/`)
    }
  }
}
</script>
