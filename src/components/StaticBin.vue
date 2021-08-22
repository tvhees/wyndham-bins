<template>
  <div :style="binStyle" class="bin">
    <p>{{ bin_detail }}</p>
    <p>{{ fill_lvl }}/{{ fill_thres }}</p>
    <p>{{ status }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BinFeature } from "../../global";
import "./../global.css";

export default defineComponent({
  name: "StaticBin",
  props: {
    binFeature: {
      type: Object as PropType<BinFeature>,
      required: true,
    },
  },
  setup(props) {
    const { bin_detail, fill_lvl, status, fill_thres } =
      props.binFeature.properties;

    const binStyle = gradientStyle(props.binFeature);
    return { bin_detail, fill_lvl, status, fill_thres, binStyle };
  },
});

const gradientStyle = (bin: BinFeature) => {
  const fill = (100 * bin.properties.fill_lvl) / bin.properties.fill_thres;
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
.bin {
  height: 150px;
  width: 150px;
  border: 1px solid black;
  margin: 5px;
  color: black;
}
</style>