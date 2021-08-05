<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Here we want to show a simple example how to integrate the fantastic Eclipse Furo Stack into a Vue application.
    </p>
    <h3>Used Packages</h3>
    <ul>
      <li><a href="https://www.npmjs.com/package/@furo/framework" target="_blank" rel="noopener">@furo/framework</a>
      </li>
      <li><a href="https://www.npmjs.com/package/@furo/data" target="_blank" rel="noopener">@furo/data</a></li>
    </ul>
    <h3>Integrated Furo Services</h3>
    <div>
      <ul>
        <li v-for="(value, name) in services" v-bind:key="name">
        {{ name }}: {{ value }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import {Env} from '@furo/framework';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      services: Env.api.services
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #504163;
}
</style>
