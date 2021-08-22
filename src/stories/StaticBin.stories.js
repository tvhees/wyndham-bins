import StaticBin from '../components/StaticBin.vue';
import * as bins from './__data__/bins';

export default {
  title: 'Bins/Static',
  component: StaticBin,
};

const Template = (args) => ({
  components: { StaticBin },
  setup() {
    return { args };
  },
  template: '<static-bin v-bind="args" />',
});

export const Empty = Template.bind({});
Empty.args = {
  binFeature: bins.Empty,
};

export const Low = Template.bind({});
Low.args = {
  binFeature: bins.Low,
};

export const Medium = Template.bind({});
Medium.args = {
  binFeature: bins.Medium,
};

export const High = Template.bind({});
High.args = {
  binFeature: bins.High,
};

export const Overfull = Template.bind({});
Overfull.args = {
  binFeature: bins.Overfull,
};
