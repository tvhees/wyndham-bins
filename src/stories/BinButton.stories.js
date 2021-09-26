import BinButton from "../components/BinButton.vue";

export default {
  title: 'Bins/Button',
    component: BinButton,
    argTypes: {
        binType: {
            control: { type: 'inline-radio' },
            options: ['garbage', 'recycling'],
        },
        fillPercent: {
            control: {
                type: 'range', min: 0,
                max: 1.2,
                step: 0.05
            },
        }
    }
};

const Template = (args) => ({
  components: { BinButton },
    setup() {
    return { args };
  },
  template: '<bin-button v-bind="args" />',
});


export const Static = Template.bind({});
Static.args = {
    fillPercent: 0.55,
    binType: 'garbage'
};