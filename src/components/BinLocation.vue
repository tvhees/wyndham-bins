<script lang="ts" setup>
import type { BinFeature } from "bins";
import BinButton from "./BinButton.vue";
import { COLOURS } from "../lib/guidelines";

interface LocationProps {
    location: string
    garbage?: BinFeature
    recycling?: BinFeature
}

interface LocationEmits {
    (e: 'update:selected', location: string, binType: string): void
}

const props = defineProps<LocationProps>();
defineEmits<LocationEmits>();
</script>

<template>
    <div class="bin-location">
        <p>{{ location }}</p>
        <bin-button
            v-if="props.garbage"
            bin-type="garbage"
            :fill-percent="props.garbage.properties.fill_lvl / props.garbage.properties.fill_thres"
            :alert="props.garbage.properties.status === 'ALERT'"
            @click="$emit('update:selected', location, 'Garbage')"
        />
        <bin-button
            v-if="props.recycling"
            bin-type="recycling"
            :fill-percent="props.recycling.properties.fill_lvl / props.recycling.properties.fill_thres"
            :alert="props.recycling.properties.status === 'ALERT'"
            @click="$emit('update:selected', location, 'Recycling')"
        />
    </div>
</template>

<style>
.bin-location {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 20px;
    width: 324px;
    margin: 0px 10px 15px;
    background-color: v-bind("COLOURS.WHITE");
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
}

.bin-location > p {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    width: 100px;
    text-align: left;
}
</style>