<template>
    <h1>How full are the bins in Wyndham?</h1>
    <div class="bins-container">
        <static-bin
            v-for="bin in staticBins"
            v-bind="bin.properties"
            :key="bin.properties.serial_num"
            @click="() => onSelectBin(bin.properties.serial_num)"
        />
    </div>
    <div v-if="animatedBin.length">
        <static-bin v-bind="animatedBin[time].properties" />
        <timeline-slider :data="animatedBin" @input="onSelectTime" />
    </div>
</template>

<script lang="ts">
import { BinFeature, BinFeatureCollection } from "bins";
import { defineComponent, onMounted, Ref, ref } from "vue";
import { fullnessCompareDescending } from "./lib/bin-sort-functions";
import { fetchRecentData, initialiseDatabaseConnection } from "./lib/firestore";
import StaticBin from "./components/StaticBin.vue";
import TimelineSlider from "./components/TimelineSlider.vue";
import "./global.css";
import { timeSeriesForSerial } from "./lib/transform-data";

const db = initialiseDatabaseConnection();

const BINS_URL =
    "https://data.gov.au/data/dataset/08531201-ac9f-4f5f-bb7e-ac16b1da28b4/resource/15732b49-3e50-40ce-8dfd-0efed18661f4/download/sb_fill_lvel.json";

export default defineComponent({
    name: "App",
    components: {
        StaticBin,
        TimelineSlider,
    },
    setup() {
        const staticBins: Ref<BinFeature[]> = ref([]);
        const animatedBin: Ref<BinFeature[]> = ref([]);
        const time: Ref<number> = ref(0);
        let historicalData: BinFeatureCollection[];

        const fetchData = async () => {
            historicalData = await fetchRecentData(db);

            const serialNum = 1511209;
            const data = historicalData.flatMap(
                collection => collection.features.filter(
                    feature => feature.properties.serial_num === serialNum)
            ).map(
                feature => feature.properties
            ).sort(
                (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
            ).slice(0, 23)
                ;
            console.log({ data });

            const freshData = await fetch(BINS_URL).then((response) =>
                response.json()
            );

            const binData = freshData.features as BinFeature[];

            staticBins.value = binData.sort(fullnessCompareDescending);
        };

        const onSelectBin = (serial_num: number) => {
            animatedBin.value = timeSeriesForSerial(serial_num, historicalData);
        };

        const onSelectTime = (selectedTime: number) => {
            time.value = selectedTime;
        }

        onMounted(fetchData);

        return { staticBins, animatedBin, time, onSelectBin, onSelectTime };
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
