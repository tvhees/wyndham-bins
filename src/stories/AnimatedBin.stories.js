import AnimatedBin from '../components/AnimatedBin.vue';
import * as bins from './__data__/bins';

export default {
  title: 'Bins/Animated',
  component: AnimatedBin,
};

const Template = (args) => ({
  components: { AnimatedBin },
  setup() {
    return { args };
  },
  template: '<animated-bin v-bind="args" />',
});

export const Normal = Template.bind({});
Normal.args = {
  timeline: bins.timeSeries,
};