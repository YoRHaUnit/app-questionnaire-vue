<template>
  <div>
    <form class="form-example" @submit="submitHandler">
      <div class="form-example">
        <label for="first_name">Votre prénom : </label>
        <input type="text" name="first_name" id="first_name" v-model="first_name" required>
      </div>
      <div class="form-example">
        <label for="last_name">Votre nom : </label>
        <input type="text" name="last_name" id="last_name" v-model="last_name" required>
      </div>
      <div class="form-example">
        <label for="company">Votre société : </label>
        <input type="text" name="company" id="company" v-model="society" required>
      </div>
      <div class="form-example">
        <input type="submit" value="Valider">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      first_name: null,
      last_name: null,
      society: null,
      question: '0',
      user: []
    }
  },
  methods: {
    submitHandler (event) {
      event.preventDefault()
      this.$router.push(`/questions/${this.first_name}/${this.last_name}/${this.society}/${this.question}`)
    }
  }
}
</script>
