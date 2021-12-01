<template>
  <div class="leaderboard">
    <h1 class="leaderboard-title">LeaderBoard</h1>
    <v-card class="leaderboard-card">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table v-if="leaders != null"
        :headers="headers"
        :items="leaders"
        :items-per-page="10"
        class="elevation-1"
        :search="search"
      ></v-data-table>
    </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: "",
        headers: [
          {
            text: 'LeaderBoard',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: "Position", value: "position" },
          { text: "Score", value: "score" },
          { text: "Nombre d'amos", value: "amos_count" },
          { text: "Nombre de type d'amos découvert", value: "amos_type_count" },
          { text: "Niveau total des amos", value: "total_amos_level" },
          { text: "Type d'amos préferé", value: "amos_type_prefer" },
          { text: "Dernière capture", value: "last_catch" }
        ],
        leaders: null
      }
    },
    mounted() {
      this.$axios.get("https://happy-amos.herokuapp.com/leaderboard").then(response => {
        this.leaders = response.data.leaderboard;
        for (let i = 0; i < this.leaders.length; i++) {
          this.leaders[i].last_catch = this.$moment(this.leaders[i].last_catch).locale("fr").fromNow();
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
</script>

<style>
.leaderboard {
  width: 75%;
}

.leaderboard-title {
  width: 100%;
  text-align: center;
  color: var(--secondary_c);
}

.leaderboard-card {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
