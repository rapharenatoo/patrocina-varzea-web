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
        // root: {
        //   position: "relative",
        //   "& $notchedOutline": {
        //     borderColor: "#797979",
        //   },
        //   "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
        //     borderColor: "#797979",
        //     // Reset on touch devices, it doesn't add specificity
        //     "@media (hover: none)": {
        //       borderColor: "#797979",
        //     },
        //   },
        //   "&$focused $notchedOutline": {
        //     borderColor: "#797979",
        //     borderWidth: 2,
        //   },
        //   "&$actived": {
        //     borderColor: "#797979",
        //     borderWidth: 1,
        //   },
        //   borderColor: "#797979",
        // },
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
        },
      },
    },
  },
});
