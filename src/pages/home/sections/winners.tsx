import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type WSProps = {
  totalWinners: string;
  setTotalWinners: StateReact<string>;
};

export const WinnersSection: React.FC<WSProps> = ({
  totalWinners,
  setTotalWinners,
}) => {
  const handleChange = (e: SelectChangeEvent) => {
    setTotalWinners(e.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="filled" fullWidth>
        <InputLabel>Selecciona total de ganadores</InputLabel>
        <Select value={totalWinners} label="Select" onChange={handleChange}>
          <MenuItem value={1}>Un ganador</MenuItem>
          <MenuItem value={2}>Dos ganadores</MenuItem>
          <MenuItem value={3}>Tres ganadores</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
