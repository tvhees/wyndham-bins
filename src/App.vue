<template>
  <h1>How full are the bins in Wyndham?</h1>
  <div class="bins-container">
    <div
      :key="bin.properties.bin_detail"
      v-for="bin in bins"
      :style="gradientStyle(bin)"
      class="bin"
    >
      <p>{{ bin.properties.bin_detail }}</p>
      <p>{{ bin.properties.fill_lvl }}/{{ bin.properties.fill_thres }}</p>
      <p>{{ bin.properties.status }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { BinFeature } from "../global";
import { fullnessCompareDescending } from "./lib/bin-sort-functions";
import { fetchRecentData, initialiseDatabaseConnection } from "./lib/firestore";

const db = initialiseDatabaseConnection();

const BINS_URL =
  "https://data.gov.au/data/dataset/08531201-ac9f-4f5f-bb7e-ac16b1da28b4/resource/15732b49-3e50-40ce-8dfd-0efed18661f4/download/sb_fill_lvel.json";

export default defineComponent({
  name: "App",
  setup() {
    const bins: Ref<BinFeature[]> = ref([]);

    const fetchData = async () => {
      //   const newData = await fetchRecentData(db);

      const collection = await fetch(BINS_URL).then((response) =>
        response.json()
      );

      const binData = collection.features as BinFeature[];

      bins.value = binData.sort(fullnessCompareDescending);
    };

    onMounted(fetchData);

    const gradientStyle = (bin: BinFeature) => {
      const fill = (100 * bin.properties.fill_lvl) / bin.properties.fill_thres;
      const colour = fill > 70 ? "#ff6161" : fill > 25 ? "orange" : "green";

      if (fill > 100) {
        return {
          color: "white",
          background: `repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    darkorange 10px,
    darkorange 20px
  ), linear-gradient(0deg, ${colour} ${fill}%, #e0e0e0 ${0}%)`,
        };
      }

      return {
        background: `linear-gradient(0deg, ${colour} ${fill}%, #e0e0e0 ${0}%)`,
      };
    };

    return { bins, gradientStyle };
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

.bins-container {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}

.bin {
  height: 150px;
  width: 150px;
  border: 1px solid black;
  margin: 5px;
  color: black;
}
</style>
