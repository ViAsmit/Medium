import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "sohne",
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif",
    ],
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#008000",
    },
  },
});

export default theme;
