import mixpanel from 'mixpanel-browser';

let initialized = false;

const init = () => new Promise(resolve => {
  if (initialized) {
    return resolve();
  }

  initialized = true;
  mixpanel.init(process.env.MIXPANEL_TOKEN);

  return resolve();
});

export const track = (eventName, args = {}) => init().then(() => {
  if (typeof args !== "object") {
    throw new Error("Invalid format of args");
  }
  if (process.env.NODE_ENV === "production") {
    return mixpanel.track(eventName, args);
  } else {
    console.warn(`mixpanel event ${eventName} not tracked`, args);
  }
}).catch(err => {
  if (process.env.NODE_ENV !== "production") {
    console.error(err);
  }
});

export const pageView = url => {
  // turn off mixpanel for now
  return null;
  // return track('pageView', { url });
};
