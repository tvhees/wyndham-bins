<script lang="ts" setup>
import { COLOURS } from '../lib/guidelines';

interface HeaderProps {
    region?: string
    location?: string
}

const props = defineProps<HeaderProps>();
</script>

<template>
    <header>
        <h1>{{ props.region || 'Wyndham' }}</h1>
        <p>{{ (props.region && props.location) || 'Smart Bins' }}</p>
    </header>
</template>

<style>
header {
    background-color: v-bind("COLOURS.PRIMARY");
    color: v-bind("COLOURS.WHITE");
    text-align: left;
    padding: 22px 60px;
}

header h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}

header p {
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 36px;
}
</style>