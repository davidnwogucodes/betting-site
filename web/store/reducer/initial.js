import { THEME, NAVFUNC } from "../type";

const initalState = {
  theme: "light-mode",
  navOpen: false,
};
const initialReducer = (state = initalState, action) => {
  switch (action.type) {
    case THEME:
      return {
        ...state,
        theme:
          typeof action.payload === "boolean"
            ? action.payload
              ? "light-mode"
              : "dark-mode"
            : state.theme === "dark-mode"
            ? "light-mode"
            : "dark-mode",
      };
    case NAVFUNC:
      return {
        ...state,
        navOpen:
          typeof action.payload === "boolean" ? action.payload : !state.navOpen,
      };
    default:
      return { ...state };
  }
};

export default initialReducer;
