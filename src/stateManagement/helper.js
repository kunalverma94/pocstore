export const getLocalStorage = JSON.parse(
  localStorage.getItem("app") || '{"appState":1,"cartItems":[]}'
);

export const setLocalStorage = (key, value, action = "") => {
  let _app = getLocalStorage;
  _app[key] = value;
  localStorage.setItem("app", JSON.stringify(_app));
};

export const getFirstOrDefault = (a) => {
  if (!a || a.length === 0) {
    throw Error("No data found");
  }
  if (Array.isArray(a) && a.length === 1) {
    return a[0];
  } else {
    return a;
  }
};

export const IsNullOeEmpty = (e) => e && e.trim() !== "";
