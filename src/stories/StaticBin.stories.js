import StaticBin from '../components/StaticBin.vue';
import { ref, toRef } from "vue";
import { tap, repeat } from "rxjs";
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
  ...bins.Empty,
};

const animatedTemplate = (args) => ({
    components: { StaticBin },
    setup() {
        const fill_lvl = ref(0);
        bins.generateTimeSeries(0, 8, 250, 5000)
            .pipe(repeat())
            .subscribe(val => { fill_lvl.value = val });

        return { args, fill_lvl };
  },
  template: '<static-bin v-bind="args" :fill_lvl="fill_lvl" />',
})

export const Animated = animatedTemplate.bind({});
Animated.args = {
    ...bins.Empty
}