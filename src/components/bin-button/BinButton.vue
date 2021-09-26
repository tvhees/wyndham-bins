<template>
    <div class="bin">
        <div class="fill"></div>
        <div class="content">
            <svg>
                <use xlink:href="#icon-example" />
            </svg>
            <img :src="typeIcon" alt="Garbage Icon" />
            <p>{{ fillHeight }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface BinProps {
    binType: string
    fillPercent: number
}

import garbageImg from "./garbage.png";
import recyclingImg from "./recycling.png";

const props = defineProps<BinProps>();
const typeIcon = props.binType === 'garbage' ? garbageImg : recyclingImg
const fillHeight = `${Math.round(100 * props.fillPercent)}%`;
const fillColour = props.fillPercent > 0.8 ? '#eb5757' : props.fillPercent > 0.3 ? '#e2b93b' : '#27ae60'
</script>

<style>
.bin {
    height: 85px;
    width: 85px;
    border-radius: 4px;
    border: 1px solid black;
    margin: 5px;
    color: black;
    position: relative;
    overflow: hidden;
}

.fill,
.content {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.fill {
    background-color: v-bind(fillColour);
    height: v-bind(fillHeight);
}

.content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.content svg {
    fill: black;
}

.content p {
    margin: 0;
}
</style>