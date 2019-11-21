<template>
  <div>
    <!-- Veillez a bien lire le README.txt pour être sûr de commencer la lecture du code au bon endroit -->
    <!-- Formulaire de chaque question. Tout le temps composé de 3 boutons radios. Lors de la validation du formulaire, la méthode submitHandlerQuestion() est appelée -->
    <form class="form-example" @submit="submitHandlerQuestione" id="contact">
      <!-- Récupération Du libellé de la question (Question 1) ainsi que de la question elle-même -->
      <h1><span>{{myJson[parseInt(question)].name}}</span></h1><br>
      <h2><span>{{myJson[parseInt(question)].question}}</span></h2><br>
      <!-- "value" permet de récupérer la valeur de la case cochée. Récupération du libellé de la réponse -->
      <ul><input type="radio" name="question" value="1" v-model="picked" id="un"/><label for="un">{{myJson[parseInt(question)].reponses.reponse1.libelle}}</label></ul>
      <ul><input type="radio" name="question" value="2" v-model="picked" id="deux"/><label for="deux">{{myJson[parseInt(question)].reponses.reponse2.libelle}}</label></ul>
      <ul><input type="radio" name="question" value="3" v-model="picked" id="trois"/><label for="trois">{{myJson[parseInt(question)].reponses.reponse3.libelle}}</label></ul>
      <br>
      <div class="form-example">
        <button type="submit" value="Valider" id="contact-submit">Suivant</button>
      </div><br>
      <!-- Réupération du numéro de la question actuelle ainsi que du nombre de questions pour savoir où nous en sommes -->
      <div>Question actuelle : {{questionActuelle}} sur {{nbQuestions}}</div>
      <br>
    </form>
  </div>
</template>

<script>
import json from '../questions'
import PouchDB from 'pouchdb'
import moment from 'moment'

export default {
  name: 'question',
  props: {
    // Redéfinition des valeurs passées dans l'url afin de les renvoyer à la page résultat. Encore une fois, un local storage aurait été plus efficace (voir la méthode submitHandlerQuestion())
    firstname: String,
    lastname: String,
    society: String,
    question: String
  },
  data () {
    return {
      myJson: json,
      // "picked" est initialisé dans l'attribut "v-model" dans les inputs. Il prendra la valeur de la case cochée.
      picked: null,
      // Calcul du score. Additionne le score de toutes les questions
      scoreTotal: null,
      nbQuestions: json.length,
      // Initialise la première question a 1.
      questionActuelle: 1
    }
  },
  methods: {
    submitHandlerQuestione (event) {
      event.preventDefault()
      // La ligne ci-dessous sert uniquement a corriger un bug. Lorsqu'on passait à la question suivante, 8 était ajouté au nombre de questions total (exemple: question 1 sur 8, question 2 sur 16)
      this.nbQuestions = 0
      // If permettant de modifier les conséquences de nos choix. En fonction de la réponse cochée, le scoreTotal sera différent
      if (this.picked === '1') {
        this.scoreTotal = this.scoreTotal + json[parseInt(this.question)].reponses.reponse1.score
      } else if (this.picked === '2') {
        this.scoreTotal = this.scoreTotal + json[parseInt(this.question)].reponses.reponse2.score
      } else if (this.picked === '3') {
        this.scoreTotal = this.scoreTotal + json[parseInt(this.question)].reponses.reponse3.score
      }
      // Prochaine question = Question actuelle + 1
      this.question = parseInt(this.question) + 1
      this.questionActuelle = this.question + 1
      // Affichage de la question (question actuelle + 1) du fichier json
      for (var item in json) {
        this.nbQuestions = this.nbQuestions + 1
        console.log(item)
      }
      // Si la prochaine question existe, redirection sur la page avec la question suivante.
      if (this.nbQuestions > parseInt(this.question)) {
        this.$router.push(`/questionnaire/${this.firstname}/${this.lastname}/${this.society}/${parseInt(this.question)}`)
      } else {
        const scoreTotalQuestionnaire = {
          score: this.scoreTotal
        }
        // Stockage du score en variable session (plus propre que de le passer dans l'URL
        window.localStorage.setItem('leScore', JSON.stringify(scoreTotalQuestionnaire))
        // Appel de la méthode stockant la question dans la bdd (pas terminé)
        this.addDb()
        // Si la prochaine question n'existe pas, redirection sur la page résultat.
        this.$router.push({
          path: `/resultats/${this.firstname}/${this.lastname}/${this.society}/${parseInt(this.question)}`,
          params: this.scoreTotal
        })
      }
    },
    addDb () {
      var db = new PouchDB('questionnaire')
      db.put({
        _id: this.first_name + moment(String()).format('MM/DD/YYYY hh:mm'),
        nom: this.first_name,
        prenom: this.last_name,
        nomSociete: this.society
      })
      db.replicate.to('http://127.0.0.1:8001/questionnaire')
    }
  }
}

</script>

<style scoped>

</style>
