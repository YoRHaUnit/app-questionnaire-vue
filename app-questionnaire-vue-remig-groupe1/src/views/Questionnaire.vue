<template>
  <div class="container">
    <!--<span>{{firstname}}</span>
    <span>{{lastname}}</span>
    <span>{{society}}</span>-->
    <!--<div v-for="data in myJson" v-bind:key="data.name">-->
    <form class="form-example" @submit="submitHandlerQuestion" id="contact">
      <h1><span>{{myJson[parseInt(question)].name}}</span></h1><br>
      <h2><span>{{myJson[parseInt(question)].question}}</span></h2><br>
        <ul><input type="radio" name="question" value="1" v-model="picked" id="un"/><label for="un">{{myJson[parseInt(question)].reponses.reponse1.libelle}}</label></ul>
        <ul><input type="radio" name="question" value="2" v-model="picked" id="deux"/><label for="deux">{{myJson[parseInt(question)].reponses.reponse2.libelle}}</label></ul>
        <ul><input type="radio" name="question" value="3" v-model="picked" id="trois"/><label for="trois">{{myJson[parseInt(question)].reponses.reponse3.libelle}}</label></ul>
      <br>
      <div class="form-example">
        <button type="submit" value="Valider" id="contact-submit">Suivant</button>
      </div><br>
      <!--<div v-if="picked === '1'">
        score de la question : {{myJson[parseInt(question)].reponses.reponse1.score}}
      </div>
      <div v-if="picked === '2'">
        score de la question : {{myJson[parseInt(question)].reponses.reponse2.score}}
      </div>
      <div v-if="picked === '3'">
        score de la question : {{myJson[parseInt(question)].reponses.reponse3.score}}
      </div>
      <div>score total : {{scoreTotal}}</div>
      <div>Nombre de questions : {{nbQuestions}}</div>-->
      <div>Question actuelle : {{questionActuelle}} sur {{nbQuestions}}</div>
      <br>
    </form>
  </div>
</template>
<script src="pouchdb-7.1.1.min.js"></script>
<script>
import json from '../questions'
export default {
  name: 'Questionnaire',
  props: {
    firstname: String,
    lastname: String,
    society: String,
    question: String
  },
  data () {
    return {
      myJson: json,
      picked: null,
      scoreTotal: null,
      nbQuestions: json.length,
      questionActuelle: 1
    }
  },
  methods: {
    submitHandlerQuestion (event) {
      event.preventDefault()
      this.nbQuestions = 0
      if (this.picked === '1') {
        this.scoreTotal = this.scoreTotal + json[parseInt(this.question)].reponses.reponse1.score
      }
      if (this.picked === '2') {
        this.scoreTotal = this.scoreTotal + json[parseInt(this.question)].reponses.reponse2.score
      }
      if (this.picked === '3') {
        this.scoreTotal = this.scoreTotal + json[parseInt(this.question)].reponses.reponse3.score
      }
      this.question = parseInt(this.question) + 1
      this.questionActuelle = this.question + 1
      for (var item in json) {
        this.nbQuestions = this.nbQuestions + 1
        console.log(item)
      }
      if (this.nbQuestions > parseInt(this.question)) {
        this.$router.push(`/questions/${this.firstname}/${this.lastname}/${this.society}/${parseInt(this.question)}`)
      } else {
        const scoreTotalQuestionnaire = {
          score: this.scoreTotal
        }
        window.localStorage.setItem('leScore', JSON.stringify(scoreTotalQuestionnaire))
        this.$router.push({ path: `/resultats/${this.firstname}/${this.lastname}/${this.society}/${parseInt(this.question)}`, params: this.scoreTotal })
      }
    }
  }
}
</script>
