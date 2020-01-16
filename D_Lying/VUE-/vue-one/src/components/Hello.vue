<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-html="msg"></h2>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: '这一生关于你的风景'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
</style>
