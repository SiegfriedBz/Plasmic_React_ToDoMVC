// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const ThemeContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function useTheme() {
  return React.useContext(ThemeContext);
}

export default ThemeContext;
/* prettier-ignore-end */
