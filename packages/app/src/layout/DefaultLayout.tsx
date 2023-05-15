import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Outlet } from "@hafez/framework";
import { MenuCreator } from "@hafez/components";
import { menuItems } from "../utils";
import { useTranslation } from "react-i18next";

export default function DefaultLayout() {
  const { t } = useTranslation();

  // const { isAuthenticated, isLoading, signIn, signOut, user } = useAuth()
  // const checkUserIsAuthenticated = () => {
  //   return isAuthenticated ? (
  //     <Button color="inherit" onClick={() => signOut()}>
  //       {' '}
  //       Logout{' '}
  //     </Button>
  //   ) : (
  //     <Button color="inherit" onClick={() => signIn()}>
  //       Login
  //     </Button>
  //   )
  // }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t("app_name")}
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid sx={{ marginLeft: "0" }} container spacing={2}>
        <Grid item xs={2}>
          <MenuCreator items={menuItems} darkmode={true}></MenuCreator>
        </Grid>
        <Grid item xs={10}>
          <main>
            <Container fixed>
              <Outlet />
            </Container>
          </main>
        </Grid>
      </Grid>
    </>
  );
}
