<script lang="ts" setup>
import type { BinFeature } from 'bins';
import { fillPercentage } from '../lib/transform-data';
import markerIcon from '../icons/map-marker.webp';

interface BinDisplayProps {
    binData: BinFeature[]
}

const { binData } = defineProps<BinDisplayProps>();
const latest = binData[0];
const timeStamps = binData.map(feature => feature.properties.timestamp.split('T')[1]);
const timeSeries = binData.map(feature => fillPercentage(feature));
const labels = timeSeries.map((pct, i, arr) => pct === arr[i + 1] ? '-' : pct.toString());

// Map properties
const projection = 'EPSG:4326';
const center = [parseFloat(latest.properties.lon), parseFloat(latest.properties.lat)];
const zoom = 18;

// Chart properties
const xBase = 30;
const xGap = 8;
const yBase = 220;
const yGap = 1.4;
</script>

<template>
    <div class="container">
        <ol-map id="map">
            <ol-view
                ref="view"
                :center="center"
                :rotation="0"
                :zoom="zoom"
                :projection="projection"
            />

            <ol-tile-layer>
                <ol-source-osm />
            </ol-tile-layer>
            <ol-vector-layer>
                <ol-source-vector>
                    <ol-feature>
                        <ol-geom-point :coordinates="center"></ol-geom-point>
                        <ol-style>
                            <ol-style-icon :src="markerIcon" :scale="0.1"></ol-style-icon>
                        </ol-style>
                    </ol-feature>
                </ol-source-vector>
            </ol-vector-layer>
        </ol-map>
        <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
            <g class="chart">
                <g class="y axis">
                    <text :x="80 - yBase" :y="xBase / 2" transform="rotate(-90)">Fill level (%)</text>
                </g>
                <g class="x axis">
                    <g class="x axis">
                        <text
                            v-for="time, i in timeStamps"
                            class="time"
                            :x="xBase / 2 + i * xGap"
                            :y="yBase"
                        >{{ (i % 6) && (i < timeStamps.length - 1) ? '' : time }}</text>
                    </g>
                </g>
                <g class="data">
                    <text
                        v-for="pct, i in timeSeries"
                        class="pct"
                        :x="xBase + i * xGap"
                        :y="yBase - 20 - pct * yGap"
                    >{{ labels[i] }}</text>
                </g>
            </g>
        </svg>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    padding-bottom: 30px;
}

#map,
svg {
    max-width: 400px;
    width: 80%;
    aspect-ratio: 1;
    margin: auto;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    background-color: white;
}

.chart {
    fill: darkblue;
}

text.time {
    font-size: 0.4em;
}

text.pct {
    font-size: 0.6em;
}

text:last-child {
    font-size: 0.8em;
}
</style>