<template>
  <h1>How full are the bins in Wyndham?</h1>
  <div class="bins-container">
    <static-bin
      :key="bin.properties.bin_detail"
      v-for="bin in bins"
      :binFeature="bin"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { BinFeature } from "../global";
import { fullnessCompareDescending } from "./lib/bin-sort-functions";
import { initialiseDatabaseConnection } from "./lib/firestore";
import StaticBin from "./components/StaticBin.vue";
// import "./global.css";

const db = initialiseDatabaseConnection();

const BINS_URL =
  "https://data.gov.au/data/dataset/08531201-ac9f-4f5f-bb7e-ac16b1da28b4/resource/15732b49-3e50-40ce-8dfd-0efed18661f4/download/sb_fill_lvel.json";

export default defineComponent({
  name: "App",
  components: {
    StaticBin,
  },
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
.bins-container {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}
</style>
