import { ThemeProvider } from "@mui/material/styles";
import { Property } from "./features/Property/Property";
import theme from "./style/theme";

import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <nav className="navbar is-info">
        <Box className="navbar-brand">
          <Box className="navbar-item">Property listings</Box>
        </Box>
      </nav>
      <Property />
    </ThemeProvider>
  );
}

export default App;
