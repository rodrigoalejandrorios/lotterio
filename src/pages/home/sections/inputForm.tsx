import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";

type InputFormType = {
  participant: StateReact<string | null>;
};

export const InputForm: React.FC<InputFormType> = ({ participant }) => {
  const [item, setItem] = React.useState<string | null>(null);

  const insertData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value);
  };

  const hanldeSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item) {
      participant(item);
      setItem("");
    }
  };
  return (
    <Box component="form" onSubmit={hanldeSubmit}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={8}>
          <TextField
            size="small"
            label="Agregar"
            fullWidth
            value={item || ""}
            onChange={insertData}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            disabled={item === null || item === ""}
            type="submit"
            fullWidth
            variant="contained"
          >
            Agregar a la lista
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
