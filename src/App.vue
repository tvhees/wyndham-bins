<script lang="ts" setup>
import type { LocationGroup } from "bins";
import { onMounted, ref } from "vue";
import "./global.css";
import AppHeader from "./components/AppHeader.vue";
import RegionOptions from "./components/RegionOptions.vue";
import BinLocation from "./components/BinLocation.vue";
import { fetchFreshData } from "./lib/api-calls";
import { COLOURS } from "./lib/guidelines";

let locations = ref<LocationGroup[]>([]);

onMounted(async () => {
    locations.value = (await fetchFreshData())
        .sort((a, b) => a.location.localeCompare(b.location));
});

const region = ref('Point Cook');
const binType = ref('');
const location = ref('');
const handleBinSelected = (loc: string, type: string) => {
    binType.value = type;
    location.value = loc;
}
</script>

<template>
    <app-header :region="binType && region" :location="location" />
    <div class="sticky">
        <region-options
            v-if="binType"
            v-model:selected="binType"
            :options="['Garbage', 'Recycling']"
        />
        <region-options v-else v-model:selected="region" :options="['Point Cook', 'Werribee']" />
    </div>
    <div class="bins-container" v-if="!binType">
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
    width: 100vw;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    overflow: hidden;
}
</style>
