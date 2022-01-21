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
import { COLOURS } from '../lib/guidelines';

const props = defineProps<BinProps>();
const typeIcon = `#icon-${props.binType}`;
const fillHeight = `${props.fillPercent}%`;
const fillColour = props.fillPercent > 80 ? COLOURS.ALERT : props.fillPercent > 30 ? COLOURS.WARN : COLOURS.SUCCESS;
</script>

<style>
.bin {
    height: 85px;
    width: 85px;
    border-radius: 4px;
    margin: 5px;
    color: black;
    position: relative;
    overflow: hidden;
    border: 0.5px solid v-bind("COLOURS.GREY_6");
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.15);
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
    color: v-bind(
        "fillColour === COLOURS.ALERT ? COLOURS.WHITE : COLOURS.BLACK"
    );
}

.content .icon-type {
    fill: v-bind(
        "fillColour === COLOURS.ALERT ? COLOURS.WHITE : COLOURS.BLACK"
    );
    width: 50px;
    height: 50px;
}

.content .icon-alert {
    position: absolute;
    top: 0;
    right: 0;
    fill: v-bind(
        "fillColour === COLOURS.ALERT ? COLOURS.WHITE : COLOURS.ALERT"
    );
    width: 30px;
    height: 30px;
}

.content p {
    margin: 0;
    margin-right: -0.4em;
    text-align: center;
}
</style>