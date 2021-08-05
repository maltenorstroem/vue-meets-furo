<template>
  <div id="app">
    <ui5-shellbar
        primary-title="VueJS meets Eclipse Furo"
        secondary-title="Integration Example"
    ></ui5-shellbar>
    <HelloWorld msg="Welcome to Vue meets Eclipse Furo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import '@ui5/webcomponents-fiori/dist/ShellBar.js';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  --split-master-width: 420px;
}

</style>
