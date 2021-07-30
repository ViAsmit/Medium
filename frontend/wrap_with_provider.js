import { ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import theme from "./src/theme";

import store from "./src/redux/store";

// eslint-disable-next-line react/display-name,react/prop-types
const provider = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>
  );
};

export default provider;
