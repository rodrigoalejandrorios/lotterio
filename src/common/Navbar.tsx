import React from "react";
import { AppBar, Button, Container, Grid, Stack, Toolbar } from "@mui/material";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import icon from "../assets/react.svg";

export const NavBar: React.FC<{}> = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container maxWidth="xl">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Stack>
                <img style={{ width: "35px" }} src={icon} />
              </Stack>
            </Grid>
            <Grid item>
              <Stack direction="row" spacing={2}>
                <Button startIcon={<PaidRoundedIcon />} variant="contained">
                  Donar
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
