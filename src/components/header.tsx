import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

type HeaderProps = {
  title: string;
  description: string;
};

export const HeaderComponent: React.FC<HeaderProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <Box>
        <Grid
          sx={{ height: "250px" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <Typography variant="h1">{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{description}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};
