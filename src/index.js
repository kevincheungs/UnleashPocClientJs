import _ from 'lodash';

import { UnleashClient } from 'unleash-proxy-client';

// See all options in separate section.
const unleash = new UnleashClient({
    url: 'http://localhost:3000/proxy',
    clientKey: 'proxy-client-key',
    appName: 'default'
});

unleash.start();


unleash.on('ready', () => {
  if (unleash.isEnabled('buttonColor3')) {
    console.log('proxy.demo is enabled');
    console.log(unleash.getVariant('buttonColor3'));
  } else {
    console.log('proxy.demo is disabled');
  }
})

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
