import React from "react";
import { AppContext } from "../../App";
import { config } from "../../app/config";
export const getGeographicalPrice = (x) => (
  <>
    <AppContext.Consumer>
      {(value) => value.REGION[config.CURRENT_REGION]}
    </AppContext.Consumer>
    {x}
  </>
);

export const ThemeContext = () => (
  <AppContext.Consumer>{(value) => value.theme}</AppContext.Consumer>
);
