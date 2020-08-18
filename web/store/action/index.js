import { NAVFUNC, THEME } from "../type";

export const setNavOpen = (payload) => {
  return {
    type: NAVFUNC,
    payload,
  };
};
export const setTheme = (payload) => {
  return {
    type: THEME,
    payload,
  };
};
