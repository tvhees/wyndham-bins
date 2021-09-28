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
import { LocationGroup } from "bins";
import { computed, onMounted, Ref, ref } from "vue";
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
let locations: LocationGroup[] = $ref([]);

onMounted(async () => {
    locations = (await fetchFreshData())
        .sort((a, b) => a.location.localeCompare(b.location));
});

let region = $ref('Point Cook');
const handleSwipe = (_direction: Swipe) => {
    if (region === 'Point Cook') {
        region = 'Werribee';
    } else {
        region = 'Point Cook';
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
