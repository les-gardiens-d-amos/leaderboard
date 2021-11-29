<template>
  <div class="stats-container">
    <h1 class="stats-title">Statistiques</h1>
    <Map :location="locations" v-if="dataLoaded"/>
    <Stats :amosStats="dataStats" v-if="dataLoaded"/>
  </div>
</template>

<script>
import Map from "./statitsics/Map.vue";
import Stats from "./statitsics/Stats.vue";

export default {
  components: {
    Map,
    Stats
  },
  data() {
    return {
      locations: null,
      dataLoaded: false,
      dataStats: null
    }
  },
  methods: {
    findGlobalStats() {
      this.$axios.get("https://happy-amos.herokuapp.com/amos/global/stats").then(response => {
        this.$store.commit("globalStats", response.data);
        this.$store.commit("locations", response.data.amos_location);
        this.locations = this.$store.state.locations;
        this.dataStats = this.$store.state.globalStats;
        this.dataLoaded = true;
      }).catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    if (this.$store.state.locations === null) {
      this.findGlobalStats();
    } else {
      this.locations = this.$store.state.locations;
      this.dataStats = this.$store.state.globalStats;
      this.dataLoaded = true;
    }
  }
}
</script>

<style>
.stats-container {
  width: 75%;
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
