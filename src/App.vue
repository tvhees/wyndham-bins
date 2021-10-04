<template>
    <app-header />
    <div class="sticky">
        <region-options :options="['Point Cook', 'Werribee']" v-model:selected="region" />
    </div>
    <div class="bins-container transition-left" v-if="region === 'Point Cook'">
        <bin-location
            v-for="location in locations
            .filter(location => location.region === 'Point Cook')"
            :key="location.location"
            v-bind="location"
        />
    </div>
    <div class="bins-container transition-right" v-else>
        <bin-location
            v-for="location in locations
            .filter(location => location.region === 'Werribee')"
            :key="location.location"
            v-bind="location"
        />
    </div>
</template>

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

let region = ref('Point Cook');
</script>

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
