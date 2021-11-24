<template>
  <div id="app">
    <Header/>
    <!-- <img alt="Amos Guardian" src="./assets/guardian-amos-logo.png"> -->
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
:root {
  --white: #ffffff;
  --primary_c: #495E78;
  --secondary_c: #67697C;
  --tertiary_c: #969696;
  --quaternary_c: #B79D94;
  --warning_c: #DDB771;
  --error_c: #A30B37;
  --success_c: #5cd65c;
  --mammal_c: #F887B0;
  --bird_c: #7EDCE6;
  --fish_c: #3289F6;
  --amphibian_c: #63BC55;
  --reptile_c: #2D8159;
  --invertebrate_c: #783BB6;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 300vh;
}
</style>
