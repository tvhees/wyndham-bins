<script lang="ts" setup>
import { BinFeatureCollection, LocationGroup, BinTypeKey, BinFeature } from "bins";
import { computed, onMounted, ref } from "vue";
import "./global.css";
import AppHeader from "./components/AppHeader.vue";
import RegionOptions from "./components/RegionOptions.vue";
import BinLocation from "./components/BinLocation.vue";
import BinDisplay from "./components/BinDisplay.vue";
import { fetchFreshData } from "./lib/api-calls";
import { COLOURS } from "./lib/guidelines";
import { fetchRecentData, initialiseDatabaseConnection } from "./lib/firestore";

let locations = ref<LocationGroup[]>([]);
let historicalData: BinFeatureCollection[] = [];
onMounted(async () => {
    locations.value = (await fetchFreshData())
        .sort((a, b) => a.location.localeCompare(b.location));

    const db = initialiseDatabaseConnection();
    fetchRecentData(db).then(data => historicalData = data);
});

const region = ref('Point Cook');
const binType = ref<BinTypeKey | ''>('');
const location = ref('');
const handleBinSelected = (loc: string, type: BinTypeKey) => {
    binType.value = type;
    location.value = loc;
};

const binData = computed(() => {
    if (binType.value === '') {
        return [] as BinFeature[];
    }

    const binSerial = locations.value.find(
        (group) => group.location === location.value
    )?.[binType.value]?.properties.serial_num;

    return historicalData.map(
        collection => collection.features.find(
            feature => feature.properties.serial_num === binSerial
        )
    ).filter(
        (feature): feature is BinFeature => feature !== undefined
    );
});
</script>

<template>
    <app-header :region="binType && region" :location="location" />
    <div class="sticky">
        <region-options
            v-if="binType"
            v-model:selected="binType"
            :options="['garbage', 'recycling']"
        />
        <region-options v-else v-model:selected="region" :options="['Point Cook', 'Werribee']" />
    </div>
    <div class="bin-display" v-if="binType">
        <bin-display :binData="binData" :key="binType" />
    </div>
    <div class="bins-container" v-else>
        <bin-location
            v-for="location in locations
            .filter(location => location.region === region)"
            :key="location.location"
            v-bind="location"
            @update:selected="handleBinSelected"
        />
    </div>
</template>

<style>
.sticky {
    position: sticky;
    top: 0px;
    background: linear-gradient(
        v-bind("COLOURS.GREY_7") 50%,
        rgba(255, 255, 255, 0)
    );
    padding: 30px 10px;
    z-index: 10;
}

.bins-container {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    overflow: hidden;
}
</style>
