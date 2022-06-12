<template>
  <div>
    <TabButton />
    <FormTab />
  </div>
</template>

<script>
import TabButton from "./components/TabButton.vue"
import FormTab from "./components/FormTab.vue"

export default {
  name: 'App',
  components: {
   TabButton,
   FormTab
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
