<template>
  <div class="stats-container">
    <h1 class="stats-title">Statistiques</h1>
    <Map :location="locations" v-if="dataLoaded"/>
  </div>
</template>

<script>
import Map from "./statitsics/Map.vue";

export default {
  components: {
    Map
  },
  data() {
    return {
      locations: null,
      dataLoaded: false
    }
  },
  methods: {
    findGlobalStats() {
      this.$axios.get("https://happy-amos.herokuapp.com/amos/global/stats").then(response => {
        this.locations = response.data.amos_location;
        this.dataLoaded = true;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.findGlobalStats();
  }
}
</script>

<style>
.stats-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.stats-title {
  width: 100%;
  text-align: center;
  color: var(--secondary_c);
  margin-bottom: 15px;
}
</style>