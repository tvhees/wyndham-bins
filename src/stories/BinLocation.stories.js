import BinLocation from "../components/BinLocation.vue";
import { currentData } from "./__data__/bins";

export default {
  title: 'Bins/Location',
    component: BinLocation,
};

const Template = (args) => ({
  components: { BinLocation },
    setup() {
    return { args };
  },
  template: '<bin-location v-bind="args" />',
});

const findBin = (location, type, data) => { 
    return data.find(feature => feature.properties.bin_detail.match(`${location} ${type}`));
}

export const Static = Template.bind({});
Static.args = {
    location: 'Ally Fashion',
    garbage: findBin('Ally Fashion', 'G', currentData),
    recycling: findBin('Ally Fashion', 'R', currentData)
};