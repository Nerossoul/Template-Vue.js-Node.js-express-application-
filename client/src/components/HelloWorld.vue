<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="button" name="Request" value="Request" @click="get_data"><br>
    {{ api_response }}
  </div>   
</template>

<script>
import apiDefault from '../api/apiDefault'

export default {
  name: 'Component_default',
  data() {
    return {
      title: 'Component Title',
      api_response: []
    }
  },
  methods: {
    async get_data() {
      this.api_response = await apiDefault.get_default()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
