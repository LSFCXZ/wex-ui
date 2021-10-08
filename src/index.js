import card from '../packages/card/index';
import demo from '../packages/demo/index';
const components = {
  "we-demo": demo,
  "we-card":card
}

const install = function (Vue) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
}

export default install