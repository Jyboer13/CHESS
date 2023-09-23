import Logo from "./assets/logo.svg";
import { ReactComponent as Logo2 } from "./assets/logo.svg";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { MyButton } from "./MyButton";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>CHESS IS HERE, MOTHERFUCKER!</h1>
      <div>
        <Logo2 />
      </div>
      <img src={Logo} alt="Logo" />
      <Button variant="contained">Hello CHESS</Button>
      <IconButton>
        <AddRoadIcon />
      </IconButton>
      <div>
        <MyButton />
      </div>
    </ThemeProvider>
  );
};
