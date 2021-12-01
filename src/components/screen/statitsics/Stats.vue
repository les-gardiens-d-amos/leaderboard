<template>
  <div class="stats-visu">
    <AmosSpecies :amospecies="species"/>
    <AmosTypes :amostypes="types"/>
    <UserRegister :userRegister="userRegister"/>
    <UserConnected :userConnected="userConnected"/>
    <AmosCounter :amosCount="amosCount"/>
  </div>
</template>

<script>
import AmosSpecies from "./visualization/AmosSpecies.vue";
import AmosTypes from "./visualization/AmosTypes.vue";
import UserRegister from "./visualization/UserRegister.vue";
import UserConnected from "./visualization/UserConnected.vue";
import AmosCounter from "./visualization/AmosCounter.vue";

export default {
  components: {
    AmosSpecies,
    AmosTypes,
    UserRegister,
    UserConnected,
    AmosCounter
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
      species: null,
      userRegister: null,
      userConnected: null,
      amosCount: null
    }
  },
  beforeMount() {
    this.types = this.amosStats.amos_types;
    this.species = this.amosStats.amos_species;
    this.userRegister = this.amosStats.last_week_new_users;
    this.userConnected = this.amosStats.last_week_users_connected;
    this.amosCount = this.amosStats.last_week_amos;
  }
}
</script>

<style>
.stats-visu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.visualisation {
  width: 48%;
  margin-top: 30px;
}

.visualisation-fullscreen {
  width: 100%;
  margin-top: 30px;
}

.visualisation-title {
  padding: 10px;
  color: var(--secondary_c);
}
</style>
