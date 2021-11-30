<template>
  <v-card class="visualisation">
    <h2 class="visualisation-title">Nombre de joueur inscrit :</h2>
    <canvas ref="userRegisterChart" id="user-register-chart" class="user-register-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      data: {
        labels: ["plop","plop","plop","plop","plop","plop", "plop"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    }
  },
  methods: {
    createChart() {
      let ctx = this.$refs.userRegisterChart;
      let data = this.data;
      let options = this.options;
      new Chart(ctx, {
        type: "line",
        data,
        options
      });
    }
  },
  mounted() {
    this.createChart();
  }
}
</script>

<style>

</style>
