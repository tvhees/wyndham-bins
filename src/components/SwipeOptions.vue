<script lang="ts" setup>
import { ref } from "vue";
import { COLOURS } from "../lib/guidelines";

interface OptionsProps {
    options: string[]
}

const props = defineProps<OptionsProps>();
const picked = ref(props.options[0]);

const generateId = (option: string) => option.replace(' ', '').toLowerCase();
</script>

<template>
    <div class="label-container">
        <div v-for="option in props.options">
            <input
                type="radio"
                :id="generateId(option)"
                :name="option"
                :value="option"
                v-model="picked"
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
    margin: 0px 20px 20px 20px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
}

.label-container div {
    flex: 1;
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
}

input:checked ~ label {
    color: v-bind("COLOURS.WHITE");
    background-color: v-bind("COLOURS.PRIMARY");
}
</style>