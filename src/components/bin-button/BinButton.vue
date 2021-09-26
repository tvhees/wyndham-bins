<template>
    <div class="bin">
        <div class="fill"></div>
        <div class="content">
            <svg v-if="alert" class="icon-alert">
                <use xlink:href="#icon-alert" />
            </svg>
            <svg class="icon-type">
                <use v-bind:xlink:href="typeIcon" />
            </svg>
            <p>{{ fillHeight }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
interface BinProps {
    binType: string
    fillPercent: number
    alert: boolean
}
const COLOR_RED = '#BA0000';
const COLOR_ORANGE = '#FBC756';
const COLOR_GREEN = '#76CA66';

const props = defineProps<BinProps>();
const typeIcon = `#icon-${props.binType}`;
const fillHeight = `${Math.round(100 * props.fillPercent)}%`;
const fillColour = props.fillPercent > 0.8 ? COLOR_RED : props.fillPercent > 0.3 ? COLOR_ORANGE : COLOR_GREEN;
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
    color: v-bind('fillColour === COLOR_RED ? "white" : "black"');
}

.content .icon-type {
    fill: v-bind('fillColour === COLOR_RED ? "white" : "black"');
    stroke: v-bind('fillColour === COLOR_RED ? "white" : "black"');
    width: 50px;
    height: 50px;
}

.content .icon-alert {
    position: absolute;
    top: 0;
    right: 0;
    fill: v-bind('fillColour === COLOR_RED ? "white" : COLOR_RED');
    width: 30px;
    height: 30px;
}

.content p {
    margin: 0;
}
</style>