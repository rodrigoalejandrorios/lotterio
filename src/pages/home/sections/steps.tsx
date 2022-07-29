import { Box, Step, StepLabel, Stepper } from "@mui/material";

type StepsProps = {
  steps: Array<string>;
  activeStep: number;
};

export const StepsSection: React.FC<StepsProps> = ({ steps, activeStep }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step: any, index: any) => (
          <Step key={index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
