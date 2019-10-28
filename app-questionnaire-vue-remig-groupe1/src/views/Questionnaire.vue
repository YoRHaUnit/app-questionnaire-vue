<template>
  <div class="question">
    <h1>Questionnaire</h1>
    <!--<span>{{firstname}}</span>
    <span>{{lastname}}</span>
    <span>{{society}}</span>-->
    <!--<div v-for="data in myJson" v-bind:key="data.name">-->
    <form class="form-example" @submit="submitHandlerQuestion">
      <span>{{myJson[parseInt(question)].name}}</span><br>
      <span>{{myJson[parseInt(question)].question}}</span><br>
      <span><input type="radio" name="question" value=""/>{{myJson[parseInt(question)].reponses.reponse1.libelle}}</span>
      <span><input type="radio" name="question" value=""/>{{myJson[parseInt(question)].reponses.reponse2.libelle}}</span>
      <span><input type="radio" name="question" value=""/>{{myJson[parseInt(question)].reponses.reponse3.libelle}}</span>
    <!--</div>-->
      <div class="form-example">
        <input type="submit" value="Valider">
      </div>
    </form>
  </div>
</template>
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
      myJson: json
    }
  },
  methods: {
    submitHandlerQuestion (event) {
      event.preventDefault()
      this.$router.push(`/questions/${this.first_name}/${this.last_name}/${this.society}/${parseInt(this.question) + 1}`)
    }
  }
}
</script>
