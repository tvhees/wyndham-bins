<script lang="ts" setup>
import { computed, ref, toRefs } from "vue";
import TimelineSlider from "./TimelineSlider.vue";
import TimestampDisplay from "./TimestampDisplay.vue";
import StaticBin from "./StaticBin.vue";

interface TimelineData {
    status: string
    bin_detail: string
    fill_lvl: number
    fill_thres: number
    timestamp: string
}

const props = defineProps<{
    data: TimelineData[]
}>();

const { data } = toRefs(props);

const selectedIndex = ref(data.value.length - 1);
const onInput = (i: number) => selectedIndex.value = i;
const selectedData = computed(() => data.value[selectedIndex.value]);
</script>

<template>
    <div class="timeline-view">
        <StaticBin v-bind="selectedData" />
        <TimelineSlider :data="data" @input="onInput" />
        <TimestampDisplay :timestamp="selectedData.timestamp" />
    </div>
</template>

<style>
.timeline-view {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>