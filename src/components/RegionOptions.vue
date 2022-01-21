<script lang="ts" setup>
import { COLOURS } from "../lib/guidelines";

interface OptionsProps {
    options: string[],
    selected: string
}

interface OptionsEmits {
    (e: 'update:selected', selected: string): void
}

const props = defineProps<OptionsProps>();
defineEmits<OptionsEmits>();

const generateId = (option: string) => option.replace(' ', '').toLowerCase();
</script>

<template>
    <div class="label-container">
        <div v-for="option in props.options" :key="generateId(option)">
            <input
                type="radio"
                :id="generateId(option)"
                :name="option"
                :value="option"
                :checked="props.selected === option"
                @change="$emit('update:selected', ($event.target as HTMLInputElement).value)"
            />
            <label :for="generateId(option)">{{ option }}</label>
        </div>
    </div>
</template>

<style scoped>
.label-container {
    display: inline-flex;
    align-items: center;
    justify-content: stretch;
    width: 90%;
    max-width: 380px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}

.label-container div {
    flex: 1;
    overflow: hidden;
}

input {
    opacity: 0;
    width: 0;
    height: 0;
    margin: -1px;
    position: absolute;
}

label {
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    background-color: v-bind("COLOURS.WHITE");
    color: v-bind("COLOURS.GREY_6");
    padding: 3px 5px 5px;
    display: block;
    transition: transform 0.1s;
    text-transform: capitalize;
}

label:hover,
input:focus ~ label {
    z-index: 999;
    transform: scale(1.1);
    color: v-bind("COLOURS.PRIMARY");
}

input:checked ~ label {
    color: v-bind("COLOURS.WHITE");
    background-color: v-bind("COLOURS.PRIMARY");
    transform: scale(1);
    z-index: 0;
}
</style>