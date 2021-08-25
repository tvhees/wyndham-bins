<template>
  <div>{{ timestamp }}</div>
  <div :style="style" class="bin">
    <p>{{ bin_detail }}</p>
    <p>{{ fill_lvl }}/{{ fill_thres }}</p>
    <p>{{ status }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, toRefs } from "vue";
import { BinFeature } from "../../global";
import "./../global.css";
import { from, concatWith, concatMap, of, timer, ignoreElements } from "rxjs";

// Helper function to set up a timer that doesn't emit anything but the event
const wait$ = (t: number) => timer(t).pipe(ignoreElements());

export default defineComponent({
  name: "AnimatedBin",
  props: {
    timeline: {
      type: Array as PropType<BinFeature[]>,
      required: true,
    },
  },
  setup(props) {
    // Map our input timeline to individual time states
    // Initialise bin as a reactive object with first timestep
    const data = props.timeline.map(binState);
    const bin = reactive(data[0]);

    // Each time our timer ticks, emit the next timestep for the bin
    const timer$ = wait$(250);
    const data$ = from(data).pipe(
      concatMap((bin) => of(bin).pipe(concatWith(timer$)))
    );

    // Assign the new timestep to our reactive property and expose the
    // properties individually
    data$.subscribe((state) => Object.assign(bin, state));
    const { bin_detail, fill_lvl, fill_thres, status, timestamp, style } =
      toRefs(bin);
    return { bin_detail, fill_lvl, fill_thres, status, timestamp, style };
  },
});

const binState = (bin: BinFeature) => ({
  ...bin.properties,
  style: gradientStyle(bin),
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
  transition: color 0.2s;
}
</style>