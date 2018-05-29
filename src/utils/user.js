const KEY = "@thekevinscott";

let user;

export const getUser = () => {
  return user;
};

export const saveUser = (payload) => {
  try {
    user = {
      ...user,
      ...payload,
    };
    localStorage[KEY] = JSON.stringify(user);
  } catch(err) {
  }
};

try {
  user = JSON.parse(localStorage[KEY]);
} catch(err) {
  user = {
    id: Math.round(Math.random()*1000000),
  };

  saveUser(user);
}
