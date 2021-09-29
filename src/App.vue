<template>
    <app-header />
    <call-to-action />
    <swipe-options :options="['Point Cook', 'Werribee']" v-model:selected="region" />
    <transition name="list" mode="out-in">
        <div
            class="bins-container transition-left"
            v-touch:swipe="handleSwipe"
            v-if="region === 'Point Cook'"
        >
            <bin-location
                v-for="location in locations
                .filter(location => location.region === 'Point Cook')"
                :key="location.location"
                v-bind="location"
            />
        </div>
        <div class="bins-container transition-right" v-touch:swipe="handleSwipe" v-else>
            <bin-location
                v-for="location in locations
                .filter(location => location.region === 'Werribee')"
                :key="location.location"
                v-bind="location"
            />
        </div>
    </transition>
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
const handleSwipe = (_direction: Swipe) => {
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

.list-enter-active,
.list-leave-active {
    transition: all 0.25s ease;
}

.list-enter-from.transition-left,
.list-leave-to.transition-left {
    transform: translateX(-100vw);
}

.list-enter-from.transition-right,
.list-leave-to.transition-right {
    transform: translateX(100vw);
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
}
</style>
