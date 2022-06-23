<template>
  <div id="app">
    <canvas id="myChart" ref="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { ChartConfiguration } from "chart.js";

export default (
  Vue as VueConstructor<Vue & { $refs: { my: HTMLDivElement } }>
).extend({
  methods: {
    sayHi() {
      const canvasElement = this.$refs.myChart as HTMLCanvasElement;
    },
  },
  mounted() {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
    const config: ChartConfiguration = {
      type: "line",
      data,
      options: {},
    };
    // const ctx = (
    //   document.getElementById("myChart") as HTMLCanvasElement
    // ).getContext("2d") as CanvasRenderingContext2D;
    const canvasElement = this.$refs.myChart as HTMLCanvasElement;
    const ctx = canvasElement.getContext("2d");
    new this.$_Chart(ctx, config);
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
