<template>
    <app-header />
    <call-to-action />
    <swipe-options :options="['Point Cook', 'Werribee']" v-model:selected="region" />
    <div class="bins-container">
        <bin-location
            v-for="location in locations
            .filter(location => location.region === region)"
            :key="location.location"
            v-bind="location"
        />
    </div>
</template>

<script lang="ts">
import { LocationGroup } from "bins";
import { defineComponent, onMounted, Ref, ref } from "vue";
import "./global.css";
import AppHeader from "./components/AppHeader.vue";
import CallToAction from "./components/CallToAction.vue";
import SwipeOptions from "./components/SwipeOptions.vue";
import BinLocation from "./components/BinLocation.vue";
import { fetchFreshData } from "./lib/api-calls";

export default defineComponent({
    name: "App",
    components: {
        AppHeader,
        CallToAction,
        SwipeOptions,
        BinLocation
    },
    setup() {
        const locations: Ref<LocationGroup[]> = ref([]);

        onMounted(async () => {
            locations.value = (await fetchFreshData())
                .sort((a, b) => a.location.localeCompare(b.location));
        });

        const region = ref('Point Cook');

        return { locations, region };
    },
});
</script>

<style>
.bins-container {
    width: 100vw;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
}
</style>
