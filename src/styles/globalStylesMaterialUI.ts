import { createTheme } from "@material-ui/core";

export const style = createTheme({
  palette: {
    primary: {
      main: "#ffe600",
      dark: "#797979",
    },
    secondary: {
      main: "#121214",
    },
  },
  typography: {
    allVariants: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
        },
        input: {
          WebkitBoxShadow: "0px 0px 0px 30px #000 inset",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#797979",
          fontWeight: 600,
          borderColor: "#797979",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          color: "#797979",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          borderColor: "#797979",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#797979",
          "&.Mui-checked": {
            color: "#797979",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#797979",
          "&.Mui-checked": {
            color: "#797979",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#000",
          color: "#000",
          WebkitTextFillColor: "#FFF",
        },
      },
    },
  },
});
