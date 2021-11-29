<template>
  <div class="stats-visu">
    <AmosSpecies :amospecies="species"/>
    <AmosTypes :amostypes="types"/>
  </div>
</template>

<script>
import AmosSpecies from "./visualization/AmosSpecies.vue";
import AmosTypes from "./visualization/AmosTypes.vue";

export default {
  components: {
    AmosSpecies,
    AmosTypes
  },
  props: {
    amosStats: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      types: null,
      species: null
    }
  },
  beforeMount() {
    // console.log(this.amosStats.amos_types);
    this.types = this.amosStats.amos_types;
    this.species = this.amosStats.amos_species;
  }
}
</script>

<style>
.stats-visu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.visualisation {
  width: 48%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.visualisation-title {
  padding: 10px;
  color: var(--secondary_c);
}
</style>
