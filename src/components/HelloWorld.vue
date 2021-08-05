<template>
  <furo-split-view>
    <div slot="master" class="center">
      <img alt="Vue logo" src="../assets/logo.png">
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
    </div>

    <furo-ui5-card heading="Registered Furo Services" subheading="API Services from Furo environment" icon="connected">
      <furo-ui5-button slot="action">Start</furo-ui5-button>
      <div slot="content">
        <ul>
          <li v-for="(value, name) in services" v-bind:key="name">
            {{ name }}: {{ value }}
          </li>
        </ul>
      </div>
    </furo-ui5-card>

  </furo-split-view>

</template>

<script>
import {Env} from '@furo/framework';
import '@furo/layout/src/furo-split-view.js';
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

furo-split-view {
  padding: 1rem 1rem;
}
h3 {
  margin: 40px 0 0;
}
img {
  transform: rotate(
      180deg
  );
  filter: hue-rotate(
      56deg
  );
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin-bottom: 1rem;
}

a {
  color: #504163;
}
.center{
  text-align: center;
}
</style>
