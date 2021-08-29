<script lang="ts" setup>
import { computed, ref } from "vue";

const props =
  defineProps<{
    data: any[];
  }>();

const emit = defineEmits(['input']);

const max = props.data.length - 1;
const value = ref(max);
const onInput = () => {
    emit('input', value.value);
}

onInput();
</script>

<template>
  <p>Max: {{ max }}</p>
  <p>Value: {{ value }}</p>
  <input
    min="0"
    :max="max"
    v-model="value"
    type="range"
    name="slider"
    id="slider"
    @input="onInput"
  />
</template>

<style>
</style>