import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components";
import { steps } from "../../constants/steps";
import { selectRandom } from "../../utils/selectRandom";
import { InputForm, WinnersSection } from "./sections";
import { StepsSection } from "./sections/steps";

export const HomePage: React.FC<{}> = () => {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [totalWinners, setTotalWinners] = React.useState<string>("");
  const [participant, setParticipant] = React.useState<string | null>(null);
  const [participants, setParticipants] = React.useState<string[]>([]);
  const [winners, setWinners] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (participant) setParticipants([...participants, participant]);
  }, [participant]);

  const handleWinner = () => {
    const { result } = selectRandom({
      items: participants,
      lengthWinners: +totalWinners,
    });
    setWinners(result);
  };

  const nextStep = () => {
    setActiveStep((prev) => prev + 1);
    if (activeStep === 1) {
      handleWinner();
      setActiveStep(3);
    }

    if (activeStep === 3) {
      setActiveStep(0);
      setParticipant(null);
      setParticipants([]);
    }
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ mt: 9 }}>
        <HeaderComponent
          title="lotter.oi"
          description="Genera sorteos de uno o mas participantes"
        />
        <StepsSection steps={steps} activeStep={activeStep} />
        <Container sx={{ mt: 6 }} maxWidth="md">
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h4" sx={{ mb: 4 }}>
                {steps[activeStep]}
              </Typography>
            </Grid>
          </Grid>
          {activeStep === 0 && <InputForm participant={setParticipant} />}
          {activeStep === 1 && (
            <WinnersSection
              totalWinners={totalWinners}
              setTotalWinners={setTotalWinners}
            />
          )}
          {activeStep <= 1 ? (
            <Paper sx={{ height: "300px", mt: 2, mb: 2, padding: "0.5em 1em" }}>
              {participants.length > 0 ? (
                <Grid container spacing={1} direction="row">
                  {participants.map((participant, index) => (
                    <Grid item key={index}>
                      <Chip label={participant} />
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Stack
                  sx={{ height: "100%" }}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography variant="h4" sx={{ opacity: 0.3 }}>
                    Agrega aqui
                  </Typography>
                </Stack>
              )}
            </Paper>
          ) : (
            <Stack sx={{ mt: 3, mb: 3 }} spacing={2}>
              {winners.map((winner, index) => (
                <Typography key={index} variant={index + 1 === 1 ? "h2" : "h3"}>
                  Ganador {index + 1}: {winner}
                </Typography>
              ))}
            </Stack>
          )}
          <Button
            onClick={nextStep}
            variant="contained"
            fullWidth
            disabled={participants.length < 3}
          >
            {activeStep <= 2 ? "Siguiente" : "Volver a empezar"}
          </Button>
        </Container>
      </Container>
    </>
  );
};
