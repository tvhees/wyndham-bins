// import TimelineSlider from "../components/TimelineSlider.vue";
// import TimestampDisplay from "../components/TimestampDisplay.vue";
import TimelineView from "../components/TimelineView.vue";
import * as bins from './__data__/bins';
// import { ref } from "vue";

export default {
  title: 'Timeline/Combined View',
  component: TimelineView,
};

const Template = (args) => ({
    components: { TimelineView },
    setup() {
        return { args }
    },
    template: `<timeline-view v-bind="args" />`
});

export const Default = Template.bind({ });
Default.args = {
    data: bins.historicalData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
};

// const Template = (args) => ({
//   components: { TimelineSlider, TimestampDisplay },
//     setup() {
//         const selection = ref(args.data[args.data.length - 1].timestamp);
//         const onInput = (i) => {
//             selection.value = args.data[i].timestamp;
//         }
//         return { args, onInput, selection };
//   },
//     template: `
//     <div>
//         <timeline-slider v-bind="args" @input="onInput" />
//         <timestamp-display :timestamp="selection" />
//     </div>`,
// });

// export const Default = Template.bind({ })
// Default.args = {
//     data: bins.historicalData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
// };