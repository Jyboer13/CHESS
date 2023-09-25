import { Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";

export const withTheme = (component: () => React.ReactNode) => () =>
  (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback="Loading...">{component()}</Suspense>
    </ThemeProvider>
  );
