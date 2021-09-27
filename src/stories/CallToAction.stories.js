import CallToAction from "../components/CallToAction.vue";

const ThisComponent = CallToAction;

export default {
  title: 'App/Call to action',
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
};