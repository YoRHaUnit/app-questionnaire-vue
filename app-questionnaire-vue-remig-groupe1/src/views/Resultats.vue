<template>
  <div class="container">
    <form class="form-example" id="contact">
      <div><h1>RESULTATS</h1></div><br>
      <div><h2>Votre score est de : {{test.score}} points</h2></div><br>
      <div><h4>Monsieur {{lastname}}, Merci d'avoir répondu à ce test au sérieux incontestable.</h4></div>
    </form>
  </div>
</template>

<script>
// import json from '../questions'
export default {
  name: 'Resultats',
  props: {
    firstname: String,
    lastname: String,
    society: String,
    question: String
  },
  data () {
    return {
      test: JSON.parse(window.localStorage.getItem('leScore'))
    }
  }
}
</script>
