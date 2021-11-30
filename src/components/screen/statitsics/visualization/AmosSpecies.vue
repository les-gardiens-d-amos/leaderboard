<template>
  <v-card class="visualisation">
    <h2 class="visualisation-title">Amos capturer :</h2>
    <canvas ref="specieschart" id="species-chart" class="species-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    amospecies: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
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
    manageDataChart() {
      for (let specie in this.amospecies) {
        this.data.labels.push(specie);
        this.data.datasets[0].data.push(this.amospecies[specie]);
        this.data.datasets[0].backgroundColor.push(this.generateRandomColor());
      }
      this.createChart();
    },
    generateRandomColor() {
      return "#" + ((1<<24)*Math.random() | 0).toString(16);
    },
    createChart() {
      let ctx = this.$refs.specieschart;
      let data = this.data;
      let options = this.options;
      new Chart(ctx, {
        type: "pie",
        data,
        options
      });
    }
  },
  mounted() {
    this.manageDataChart();
  }
}
</script>

<style>
.species-chart {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
