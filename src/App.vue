<template>
  <div id="app">
    <ui5-shellbar
        primary-title="VueJS meets Eclipse Furo"
        secondary-title="Integration Example"
    >
    </ui5-shellbar>
    <ui5-tabcontainer
        class="full-width"
        collapsed
        fixed
        show-overflow
        @-tab-select="--subTabSelected"
    >
      <!-- The ui5-tab represents a selectable item inside a ui5-tabcontainer.
           For the interaction with furo-pages to work, the attribute data-tab must be set. -->
      <ui5-tab
          text="Intro"
          data-tab="home"
          selected
      ></ui5-tab>
    </ui5-tabcontainer>
    <HelloWorld msg="Welcome to Vue meets Eclipse Furo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';

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
