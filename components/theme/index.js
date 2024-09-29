import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {},
  palette: {
    primary: {
      main: "rgba(255,255,255,0.7)",
    },
    secondary: {
      main: "#fff",
    },
  },
  components: {
    // Name of the component
    // MuiButton: {
    //   defaultProps: {},
    //   styleOverrides: {
    //     root: {
    //       background: "#fff",
    //       color: "black",
    //     },
    //   },
    // },
  },
});

export default theme;
