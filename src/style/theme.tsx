import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff5722",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  spacing: 8,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          maxWidth: 345,
          height: 450,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "2",
          WebkitBoxOrient: "vertical",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          height: 200,
          marginBottom: "20px",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: 999,
        },
      },
    },
  },
});

export default theme;
