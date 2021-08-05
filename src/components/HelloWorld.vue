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
      <li><a href="https://www.npmjs.com/package/@furo/ui5" target="_blank" rel="noopener">@furo/ui5</a></li>
    </ul>
    <furo-ui5-card heading="Integrated Furo Services" subheading="API Services">
      <furo-ui5-button slot="action">Start</furo-ui5-button>
      <div slot="content">
        <ul>
          <li v-for="(value, name) in services" v-bind:key="name">
            {{ name }}: {{ value }}
          </li>
        </ul>
      </div>
    </furo-ui5-card>

  </div>
</template>

<script>
import {Env} from '@furo/framework';
import '@furo/ui5/src/furo-ui5-card.js';
import '@furo/ui5/src/furo-ui5-button.js';

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
