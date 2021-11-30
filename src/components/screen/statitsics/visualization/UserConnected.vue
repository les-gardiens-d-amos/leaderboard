<template>
  <v-card class="visualisation">
    <h2 class="visualisation-title">Nombre de joueur connecté récemment :</h2>
    <canvas ref="userConnectedChart" id="user-connected-chart" class="user-connected-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      data: {
        labels: ["plop","plop","plop","plop","plop","plop"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ]
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
      let ctx = this.$refs.userConnectedChart;
      let data = this.data;
      let options = this.options;
      new Chart(ctx, {
        type: "bar",
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
