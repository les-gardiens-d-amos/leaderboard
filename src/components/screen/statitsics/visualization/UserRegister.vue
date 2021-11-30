<template>
  <v-card class="visualisation">
    <h2 class="visualisation-title">Nombre de joueur inscrit :</h2>
    <canvas ref="userRegisterChart" id="user-register-chart" class="user-register-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    userRegister: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [{
          label: 'Nombre de joueur',
          data: [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
        }
      },
    }
  },
  methods: {
    manageData() {
      for (let i = 0; i < this.userRegister.length; i++) {
        for (let date in this.userRegister[i]) {
          this.data.labels.push(this.manageDate(date));
          this.data.datasets[0].data.push(this.userRegister[i][date]);
        }
      }
      this.createChart();
    },
    manageDate(date) {
      return this.$moment(date).locale("fr").format("MMM Do YY");
    },
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
    console.log(this.userRegister);
    this.manageData();
  }
}
</script>

<style>

</style>
