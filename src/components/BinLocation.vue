<script lang="ts" setup>
import { BinFeature } from "bins";
import BinButton from "./BinButton.vue";
import { COLOURS } from "../lib/guidelines";

interface LocationProps {
    location: string
    garbage?: BinFeature
    recycling?: BinFeature
}

const props = defineProps<LocationProps>();
</script>

<template>
    <div class="bin-location">
        <p>{{ location }}</p>
        <bin-button
            v-if="props.garbage"
            bin-type="garbage"
            :fill-percent="props.garbage.properties.fill_lvl / props.garbage.properties.fill_thres"
            :alert="props.garbage.properties.status === 'ALERT'"
        />
        <bin-button
            v-if="props.recycling"
            bin-type="recycling"
            :fill-percent="props.recycling.properties.fill_lvl / props.recycling.properties.fill_thres"
            :alert="props.recycling.properties.status === 'ALERT'"
        />
    </div>
</template>

<style>
.bin-location {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
    width: 344px;
    margin: 0px 10px 20px;
    background-color: v-bind("COLOURS.WHITE");
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}

.bin-location > p {
    width: 100px;
    text-align: left;
}
</style>