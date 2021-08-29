import TimelineSlider from "../components/TimelineSlider.vue";

export default {
  title: 'Slider',
  component: TimelineSlider,
};

const Template = (args) => ({
  components: { TimelineSlider },
    setup() {
    return { args };
  },
  template: '<timeline-slider v-bind="args" />',
});

export const Default = Template.bind({ })
Default.args = {
    data: [1, 2, 3]
};