<template>
    <app-header />
    <call-to-action />
    <swipe-options :options="['Point Cook', 'Werribee']" v-model:selected="region" />
    <div class="bins-container" v-touch:swipe="handleSwipe">
        <bin-location
            v-for="location in locations
            .filter(location => location.region === region)"
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
import CallToAction from "./components/CallToAction.vue";
import SwipeOptions from "./components/SwipeOptions.vue";
import BinLocation from "./components/BinLocation.vue";
import { fetchFreshData } from "./lib/api-calls";

enum Swipe {
    LEFT = 'left',
    RIGHT = 'right',
    TOP = 'top',
    BOTTOM = 'bottom'
};

let locations = ref<LocationGroup[]>([]);

onMounted(async () => {
    locations.value = (await fetchFreshData())
        .sort((a, b) => a.location.localeCompare(b.location));
});

let region = ref('Point Cook');
const handleSwipe = (direction: Swipe) => {
    if (direction === Swipe.TOP || direction === Swipe.BOTTOM) {
        return;
    }

    if (region.value === 'Point Cook') {
        region.value = 'Werribee';
    } else {
        region.value = 'Point Cook';
    }
};
</script>

<style>
.bins-container {
    width: 100vw;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
}
</style>
