import React from 'react';
import { Step, Stepper, StepButton, useMediaQuery } from '@mui/material';
import MyLabel from '../MyLabel';
import { LibraryMusic, Mood, Face6, Check } from "@mui/icons-material"

type Props = {
    activeStep: number,
    completed: Set<number>,
    setActiveStep: (value: number) => void
}

const steps: { icon: React.ReactNode, title: string }[] = [
    { icon: <Mood/>, title: 'Vibe' },
    { icon: <LibraryMusic />, title: 'Taste' },
    { icon: <Face6 />, title: 'Personalization' },
    { icon: <Check />, title: 'Confirmation' },
]

const MyStapper: React.FC<Props> = ({ activeStep, completed, setActiveStep }) => {

    const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

    const isCompletedStep = (step: number) => {
        return completed.has(step);
    }

    return (
        <Stepper nonLinear activeStep={activeStep}>
            {steps.map((item, index) => {
                const stepProps: { completed?: boolean } = {};

                const completed = isCompletedStep(index)
                if (completed) {
                    stepProps.completed = true;
                }

                const activeStepProps = (activeStep === index || completed) ? {
                    color: 'primary.main'
                } : {}

                console.log(stepProps)
                return (
                    <Step {...stepProps}>
                        <StepButton sx={{ position: 'relative' }} onClick={() => setActiveStep(index)}>
                            {isSmall ?
                                <MyLabel other={activeStepProps} icon={item.icon}/>
                                :
                                <MyLabel other={activeStepProps} {...item} />}
                        </StepButton>
                    </Step>
                );
            })}
        </Stepper>
    )

}

export default MyStapper