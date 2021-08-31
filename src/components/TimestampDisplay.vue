<script lang="ts" setup>
import { computed, toRefs } from "vue";
import dayjs from "dayjs";

const props = defineProps({
    timestamp: { type: String, required: true }
});

const { timestamp } = toRefs(props);
const formattedTime = computed(() => dayjs(timestamp.value).format('HH:mm dddd DD MMMM YYYY'));

</script>

<template>
    <p>{{ formattedTime }}</p>
</template>