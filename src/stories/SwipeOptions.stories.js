import RegionOptions from "../components/RegionOptions.vue";

const ThisComponent = RegionOptions;

export default {
  title: 'App/Swipe options',
    component: ThisComponent,
};

const Template = (args) => ({
  components: { ThisComponent },
    setup() {
    return { args };
  },
  template: '<this-component v-bind="args" />',
});

export const Static = Template.bind({});
Static.args = {
    options: ['Point Cook', 'Werribee']
};