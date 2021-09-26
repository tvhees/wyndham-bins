<template>
    <app-header />
    <div class="bins-container">
        <bin-location v-for="location in locations" :key="location.location" v-bind="location" />
    </div>
</template>

<script lang="ts">
import { BinFeatureCollection, LocationGroup } from "bins";
import { defineComponent, onMounted, Ref, ref } from "vue";
import { fetchRecentData, initialiseDatabaseConnection } from "./lib/firestore";
import "./global.css";
import { groupByLocation } from "./lib/transform-data";
import AppHeader from "./components/AppHeader.vue";
import BinLocation from "./components/BinLocation.vue";

const db = initialiseDatabaseConnection();

const BINS_URL =
    "https://data.gov.au/data/dataset/08531201-ac9f-4f5f-bb7e-ac16b1da28b4/resource/15732b49-3e50-40ce-8dfd-0efed18661f4/download/sb_fill_lvel.json";

export default defineComponent({
    name: "App",
    components: {
        AppHeader,
        BinLocation
    },
    setup() {
        const locations: Ref<LocationGroup[]> = ref([]);
        let historicalData: BinFeatureCollection[];

        const fetchHistoricalData = async () => {
            historicalData = await fetchRecentData(db);

            const serialNum = 1511209;
            const data = historicalData.flatMap(
                collection => collection.features.filter(
                    feature => feature.properties.serial_num === serialNum)
            ).map(
                feature => feature.properties
            ).sort(
                (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
            ).slice(0, 23);
        }

        const fetchFreshData = async () => {
            const freshData = await fetch(BINS_URL)
                .then((response) => response.json()
                );

            locations.value = Object.values(groupByLocation(freshData));
        };

        onMounted(fetchFreshData);

        return { locations };
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
