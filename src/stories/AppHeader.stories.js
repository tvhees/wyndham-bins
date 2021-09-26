import AppHeader from "../components/AppHeader.vue";

export default {
  title: 'App/Header',
    component: AppHeader,
    argTypes: {
        region: {
            control: { type: 'inline-radio' },
            options: [null, 'Point Cook', 'Werribee'],
        }
    }
};

const Template = (args) => ({
  components: { AppHeader },
    setup() {
    return { args };
  },
  template: '<app-header v-bind="args" />',
});

export const Static = Template.bind({});
Static.args = {
    region: null,
    location: 'Ally Fashion'
};