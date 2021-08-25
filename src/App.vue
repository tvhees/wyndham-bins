<template>
  <h1>How full are the bins in Wyndham?</h1>
  <div v-if="animatedBin.length > 0" class="bin-animated-container">
    <animated-bin :timeline="animatedBin" />
  </div>
  <div class="bins-container">
    <static-bin
      :key="bin.properties.serial_num"
      v-for="bin in staticBins"
      :binFeature="bin"
      @click="() => onSelectBin(bin.properties.serial_num)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { BinFeature, BinFeatureCollection } from "../global";
import { fullnessCompareDescending } from "./lib/bin-sort-functions";
import { fetchRecentData, initialiseDatabaseConnection } from "./lib/firestore";
import StaticBin from "./components/StaticBin.vue";
import AnimatedBin from "./components/AnimatedBin.vue";
import "./global.css";
import { timeSeriesForSerial } from "./lib/transform-data";

const db = initialiseDatabaseConnection();

const BINS_URL =
  "https://data.gov.au/data/dataset/08531201-ac9f-4f5f-bb7e-ac16b1da28b4/resource/15732b49-3e50-40ce-8dfd-0efed18661f4/download/sb_fill_lvel.json";

export default defineComponent({
  name: "App",
  components: {
    StaticBin,
    AnimatedBin,
  },
  setup() {
    const staticBins: Ref<BinFeature[]> = ref([]);
    const animatedBin: Ref<BinFeature[]> = ref([]);
    let historicalData: BinFeatureCollection[];

    const fetchData = async () => {
      historicalData = await fetchRecentData(db);

      const freshData = await fetch(BINS_URL).then((response) =>
        response.json()
      );

      const binData = freshData.features as BinFeature[];

      staticBins.value = binData.sort(fullnessCompareDescending);
    };

    const onSelectBin = (serial_num: number) => {
      animatedBin.value = timeSeriesForSerial(serial_num, historicalData);
    };

    onMounted(fetchData);

    return { staticBins, animatedBin, onSelectBin };
  },
});
</script>

<style>
.bins-container {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}

.bin-animated-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
