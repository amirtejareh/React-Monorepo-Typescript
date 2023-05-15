import { CacheProvider, ThemeProviderProps } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import React from "react";
import { createTheme, CssBaseline, Theme, ThemeProvider } from "@mui/material";
import { RouteObject, useRoutes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

interface FrameworkProps {
  routes: RouteObject[];
  theme: Theme;
}

const App = ({ routes }: { routes: RouteObject[] }) => useRoutes(routes);
export default ({ theme, routes }: FrameworkProps) => {
  const queryClient = new QueryClient();

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={createTheme({ direction: "rtl" }, theme)}>
        <CssBaseline />{" "}
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div dir="rtl" style={{ height: "100vh" }}>
              <App routes={routes} />
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
