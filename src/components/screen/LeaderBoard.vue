<template>
  <div class="leaderboard">
      <h1 class="leaderboard-title">LeaderBoard</h1>
      <v-data-table v-if="leaders != null"
        :headers="headers"
        :items="leaders"
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'LeaderBoard',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: "Score", value: "score" },
          { text: "Nombre d'amos", value: "amos_count" },
          { text: "Nombre de type d'amos découvert", value: "amos_type_count" },
          { text: "Niveau total des amos", value: "total_amos_level" },
          { text: "Type d'amos préferé", value: "amos_type_prefer" },
          { text: "Date de la dernière capture", value: "last_catch" }
        ],
        leaders: null
      }
    },
    beforeMount() {
      this.$axios.get("https://happy-amos.herokuapp.com/leaderboard").then(response => {
        this.leaders = response.data.leaderboard;
        for (let i = 0; i < this.leaders.length; i++) {
          this.leaders[i].last_catch = this.$moment(this.leaders[i].last_catch).fromNow();
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
}

.elevation-1 {
  width: 100%;
  margin-top: 20px;
}
</style>