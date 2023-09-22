import React, { useMemo } from "react";
import Logo from "./assets/logo.svg";
import { ReactComponent as Logo2 } from "./assets/logo.svg";

// {
//   "presets": ["@babel/preset-env", "@babel/preset-typescript"]
// }

export const App = () => {
  console.log("CHESS IS HERE, MOTHERFUCKER!");
  return (
    <div>
      <h1>CHESS IS HERE, MOTHERFUCKER!</h1>
      <div>
        <Logo2 />
      </div>
      <img src={Logo} alt="Logo" />
    </div>
  );
};
