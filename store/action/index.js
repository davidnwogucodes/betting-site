import { NAVFUNC } from "../type";

export const setNavOpen = (payload) => {
  return {
    type: NAVFUNC,
    payload,
  };
};
