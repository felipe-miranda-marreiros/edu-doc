import { UploadedCatetoryAPI } from '@/src/entities/Documents/UploadDocument'
import React, { useState } from 'react'
import { UploadFileMethod, UploadFileMethods } from './UploadFileMethod'
import { UploadFileOptions } from './UploadFileOptions'

const INITIAL_STEP = 0

export interface BaseStepProps {
  onNextTab(data?: ContextProps): void
  onPrevTab(): void
  context: ContextProps | null
}

interface ContextProps {
  category?: UploadedCatetoryAPI
  method?: UploadFileMethods
}

export function UploadFileStepper() {
  const [step, setStep] = useState(INITIAL_STEP)
  const [context, setContext] = useState<ContextProps | null>(null)

  const steps = [UploadFileOptions, UploadFileMethod]

  function onNextTab(data?: ContextProps) {
    setContext((prevState) => ({ ...prevState, ...data }))
    setStep((prevState) => {
      const nextStep = prevState + 1
      if (nextStep >= steps.length) return prevState
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
    return <Component context={context} onNextTab={onNextTab} onPrevTab={onPrevTab} />
  }

  return <>{withStepComponent(steps[step])}</>
}
