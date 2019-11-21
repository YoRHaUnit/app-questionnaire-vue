<template class="all">
  <div class="container" style="width: 1000px; max-width: 1000px;">
    <div class="form-example" >
    <!-- Veillez a bien lire le README.txt pour être sûr de commencer la lecture du code au bon endroit -->
    <!-- Début de listage des questionnaires. Ce n'est pas terminé -->
    <form @submit="accueilHandler" id="contact">
    <div>
      <h1>Page d'Administration Vue.js</h1><br>
      <ul valid-v-for="item in items" >
        {{ item }} test
      </ul>
      <div class="button-example" >
        <br>
          <button type="submit" value="Valider" style="background-color: #F9F9F9; text-decoration: none; border-color: #F9F9F9; color: black; width: auto; height: auto;">Page d'administration</button>
      </div>
      <p class="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p>
    </div>
    </form>
    </div>
  </div>
</template>

<script>
import PouchDB from 'pouchdb'

export default {
  name: 'Admin',
  data () {
    return {
      items: []
    }
  },
  created () {
    var db = new PouchDB('questionnaire')
    this.items = db.allDocs({
      include_docs: true, descending: true })
  },
  methods: {
    accueilHandler (event) {
      event.preventDefault()
      // redirection vers la page correspondante à la route suivante. (Voir le fichier index.js du package router)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
