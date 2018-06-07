const TIMEOUT_LENGTH = 500;
const NUMBER_OF_ATTEMPTS = 4;

let attempt;

const queryForDrip = (cb, attempts = 0) => {
  if (window._dcq && window._dcq.push) {
    return cb(null, window._dcq);
  }

  if (attempts >= NUMBER_OF_ATTEMPTS) {
    cb(`Could not find drip after ${attempts * TIMEOUT_LENGTH} ms`);
  }

  if (attempt) {
    clearTimeout(attempt);
  }

  attempt = setTimeout(() => {
    queryForDrip(cb, attempts + 1);
  }, TIMEOUT_LENGTH);
};

const getDrip = () => new Promise((resolve, reject) => queryForDrip((error, drip) => {
  if (error) {
    return reject(error);
  }

  return resolve(drip);
}));

export const push = (...args) => getDrip().then(drip => drip.push(...args));

export const identify = success => push(["identify", {
  success,
}]);

export { SNIPPET } from "./snippet";
