<template>
    <div :style="binStyle" class="bin">
        <p>{{ bin_detail }}</p>
        <p>{{ fill_lvl }}/{{ fill_thres }}</p>
        <p>{{ status }}</p>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import "./../global.css";

export default defineComponent({
    name: "StaticBin",
    props: {
        bin_detail: {
            type: String,
            required: true,
        },
        fill_lvl: {
            type: Number,
            required: true,
        },
        fill_thres: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const { fill_lvl, fill_thres } = toRefs(props);
        const binStyle = computed(() =>
            gradientStyle(fill_lvl.value, fill_thres.value)
        );
        return { binStyle, ...toRefs(props) };
    },
});

const gradientStyle = (fill_lvl: number, fill_thres: number) => {
    const fill = (100 * fill_lvl) / fill_thres;
    const colour = fill > 70 ? "#ff6161" : fill > 25 ? "orange" : "green";

    if (fill > 100) {
        return {
            color: "white",
            background: `repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    darkorange 10px,
    darkorange 20px
  ), linear-gradient(0deg, ${colour} ${fill}%, #e0e0e0 ${0}%)`,
        };
    }

    return {
        background: `linear-gradient(0deg, ${colour} ${fill}%, #e0e0e0 ${0}%)`,
    };
};
</script>

<style>
</style>