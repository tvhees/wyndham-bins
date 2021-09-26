<template>
    <h1>How full are the bins in Wyndham?</h1>
    <div class="bins-container">
        <bin-button
            v-for="bin in staticBins"
            :binType="bin.properties.bin_detail.match(/\sR\s/) ? 'recycling' : 'garbage'"
            :fillPercent="bin.properties.fill_lvl / bin.properties.fill_thres"
            :alert="bin.properties.status === 'ALERT'"
            :key="bin.properties.serial_num"
            @click="() => onSelectBin(bin.properties.serial_num)"
        />
    </div>
    <bin-button :fillPercent="0.55" :binType="'garbage'" :alert="true" />
    <timeline-view
        v-if="animatedBin.length"
        :data="animatedBin.map(feature => feature.properties)"
    />
</template>

<script lang="ts">
import { BinFeature, BinFeatureCollection } from "bins";
import { defineComponent, onMounted, Ref, ref } from "vue";
import { fullnessCompareDescending } from "./lib/bin-sort-functions";
import { fetchRecentData, initialiseDatabaseConnection } from "./lib/firestore";
import StaticBin from "./components/StaticBin.vue";
import TimelineSlider from "./components/TimelineSlider.vue";
import TimelineView from "./components/TimelineView.vue";
import "./global.css";
import { timeSeriesForSerial } from "./lib/transform-data";
import BinButton from "./components/bin-button/BinButton.vue";

const db = initialiseDatabaseConnection();

const BINS_URL =
    "https://data.gov.au/data/dataset/08531201-ac9f-4f5f-bb7e-ac16b1da28b4/resource/15732b49-3e50-40ce-8dfd-0efed18661f4/download/sb_fill_lvel.json";

export default defineComponent({
    name: "App",
    components: {
        StaticBin,
        TimelineSlider,
        TimelineView,
        BinButton
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

            const freshData = await fetch(BINS_URL)
                .then((response) => response.json()
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
