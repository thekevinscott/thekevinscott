import _mixpanel from 'mixpanel-browser';

const TOKEN = '0a0d38878ee707bf9e9f35da10be620c';

let initialized = false;

const getMixpanel = () => new Promise(resolve => {
  if (initialized) {
    return resolve(_mixpanel);
  }

  initialized = true;
  _mixpanel.init(TOKEN);

  return resolve(_mixpanel);
});

export const track = (...args) => getMixpanel().then(mixpanel => mixpanel.track(...args));

export const pageView = url => track('pageView', url);
