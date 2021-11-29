<template>
  <v-card class="visualisation">
    <h2 class="visualisation-title">Plop</h2>
    <canvas ref="typeschart" id="types-chart" class="types-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  data() {
    return {
      data: {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [1,4,2,5],
            backgroundColor: [
              "rgba(233, 37, 47, 0.6)",
              "rgba(253, 224, 0, 0.6)",
              "rgba(0, 0, 0, 0.6)",
              "rgba(58, 87, 144, 0.6)"
            ],
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'right'
        },
      }
    }
  },
  methods: {
    createChart() {
      let ctx = this.$refs.typeschart;
      let data = this.data;
      let options = this.options;
      new Chart(ctx, {
        type: "doughnut",
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
.types-chart {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
