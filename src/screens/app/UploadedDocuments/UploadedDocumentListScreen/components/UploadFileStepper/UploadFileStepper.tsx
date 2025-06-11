import React, { useState } from 'react'
import { UploadFileForm } from './steps/UploadFileForm'
import { UploadFileMethod } from './steps/UploadFileMethod'
import { UploadFileOptions } from './steps/UploadFileOptions'

const INITIAL_STEP = 0

export interface BaseStepProps {
  onNextStep(): void
  onPrevStep(): void
}

export function UploadFileStepper() {
  const [step, setStep] = useState(INITIAL_STEP)
  const steps = [UploadFileOptions, UploadFileForm, UploadFileMethod]
  const LIMIT = steps.length

  function onNextTab() {
    setStep((prevState) => {
      const nextStep = prevState + 1
      if (nextStep >= LIMIT) return prevState
      return nextStep
    })
  }

  function onPrevTab() {
    setStep((prevState) => {
      const prevStep = prevState - 1
      if (prevStep <= 0) return prevState
      return prevStep
    })
  }

  function withStepComponent(Component: React.ElementType<BaseStepProps>) {
    return <Component onNextStep={onNextTab} onPrevStep={onPrevTab} />
  }

  return <>{withStepComponent(steps[step])}</>
}
