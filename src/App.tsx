import Logo from "./assets/logo.svg";
import { ReactComponent as Logo2 } from "./assets/logo.svg";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import AddRoadIcon from "@mui/icons-material/AddRoad";

export const App = () => {
  console.log("CHESS IS HERE, MOTHERFUCKER!");
  return (
    <div>
      <h1>CHESS IS HERE, MOTHERFUCKER!</h1>
      <div>
        <Logo2 />
      </div>
      <img src={Logo} alt="Logo" />
      <Button variant="contained">Hello CHESS</Button>
      <IconButton>
        <AddRoadIcon />
      </IconButton>
    </div>
  );
};
