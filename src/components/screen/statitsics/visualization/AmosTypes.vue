<template>
  <v-card class="visualisation">
    <h2 class="visualisation-title">Type d'amos :</h2>
    <canvas ref="typeschart" id="types-chart" class="types-chart"></canvas>
  </v-card>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    amostypes: {
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
      for (let type in this.amostypes) {
        this.data.labels.push(type);
        this.data.datasets[0].data.push(this.amostypes[type]);
        this.data.datasets[0].backgroundColor.push(this.manageChartColor(type));
      }
      this.createChart();
    },
    manageChartColor(type) {
      if (type === "mammal") return "#F887B0";
      if (type === "bird") return "#7EDCE6";
      if (type === "fish") return "#3289F6";
      if (type === "amphibian") return "#63BC55";
      if (type === "reptile") return "#2D8159";
      if (type === "invertebrate") return "#783BB6";
    },
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
    this.manageDataChart();
  }
}
</script>

<style>
.types-chart {
  padding: 10px;
  margin-bottom: 10px;
}
</style>
