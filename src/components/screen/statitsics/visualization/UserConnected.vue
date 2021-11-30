<template>
  <v-card class="visualisation">
    <h2 class="visualisation-title">Nombre de joueur connecté récemment :</h2>
    <canvas ref="userConnectedChart" id="user-connected-chart" class="user-connected-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    userConnected: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [{
          label: 'Utilisateur connecté',
          data: [],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(153, 102, 255)',
          ]
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 10
            }
          }]
        }
      },
    }
  },
  methods: {
    manageData() {
      for (let i = 0; i < this.userConnected.length; i++) {
        for (let date in this.userConnected[i]) {
          this.data.labels.push(this.manageDate(date));
          this.data.datasets[0].data.push(this.userConnected[i][date]);
        }
      }
      this.createChart();
    },
    manageDate(date) {
      return this.$moment(date).locale("fr").format("MMM Do YY");
    },
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
    this.manageData();
  }
}
</script>

<style>

</style>
