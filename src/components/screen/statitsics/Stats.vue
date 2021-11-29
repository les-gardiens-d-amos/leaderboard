<template>
  <div class="stats-visu">
    <AmosSpecies/>
    <AmosTypes/>
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
  mounted() {
    console.log(this.amosStats);
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
