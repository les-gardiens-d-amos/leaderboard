<template>
  <v-card class="visualisation-fullscreen">
    <h2 class="visualisation-title">Nombre d'amos capturer par jour :</h2>
    <canvas ref="amosCountChart" id="amos-count-chart" class="amos-count-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    amosCount: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [{
          label: "Nombre d'amos capturer :",
          data: [],
          fill: false,
          borderColor: 'rgb(255, 100, 132)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              max: 16
            }
          }]
        }
      },
    }
  },
  methods: {
    manageData() {
      for (let i = 0; i < this.amosCount.length; i++) {
        for (let date in this.amosCount[i]) {
          this.data.labels.push(this.manageDate(date));
          this.data.datasets[0].data.push(this.amosCount[i][date]);
        }
      }
      this.createChart();
    },
    manageDate(date) {
      return this.$moment(date).locale("fr").format("MMM Do YY");
    },
    createChart() {
      let ctx = this.$refs.amosCountChart;
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
    // this.createChart();
    // console.log(this.amosCount);
    this.manageData();
  }
}
</script>

<style>

</style>
