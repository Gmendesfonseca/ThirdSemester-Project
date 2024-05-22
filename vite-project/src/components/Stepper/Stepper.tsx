import React, { useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { ColorlibConnector } from './ColorlibConnector';
import { ColorlibStepIcon } from './ColorlibStepIcon';

export function InStepper({ steps }) {
  const [activeStep] = useState(0);

  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
