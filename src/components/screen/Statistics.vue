<template>
  <div class="stats-container">
    <h1 class="stats-title">Statistiques</h1>
    <Map/>
  </div>
</template>

<script>
import Map from "./statitsics/Map.vue";

export default {
  components: {
    Map
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