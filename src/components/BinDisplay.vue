<script lang="ts" setup>
import { BinFeature } from 'bins';
import { fillPercentage } from '../lib/transform-data';
import markerIcon from '../icons/map-marker.webp';

interface BinDisplayProps {
    binData: BinFeature[]
}

const { binData } = defineProps<BinDisplayProps>();
const latest = binData[0];
const timeSeries = binData.map(feature => fillPercentage(feature!));

// Map properties
const projection = 'EPSG:4326';
const center = [parseFloat(latest.properties.lon), parseFloat(latest.properties.lat)];
const zoom = 18;
</script>

<template>
    <ol-map id="map">
        <ol-view ref="view" :center="center" :rotation="0" :zoom="zoom" :projection="projection" />

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
    <!-- <div>chart: {{ timeSeries }}</div> -->
</template>

<style>
#map {
    height: 400px;
    aspect-ratio: 1;
    margin: auto;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
}
</style>