import { UploadedCatetoryAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import React, { useState } from 'react'
import { UploadFileForm } from './steps/UploadFileForm'
import { UploadFileMethod, UploadFileMethods } from './steps/UploadFileMethod'
import { UploadFileOptions } from './steps/UploadFileOptions'

const INITIAL_STEP = 0

export interface BaseStepProps {
  onNextTab(data?: ContextProps): void
  onPrevTab(): void
  context: ContextProps | null
}

interface ContextProps {
  category?: UploadedCatetoryAPI
  method?: UploadFileMethods
  title?: string
}

export function UploadFileStepper() {
  const [step, setStep] = useState(INITIAL_STEP)
  const [context, setContext] = useState<ContextProps | null>(null)

  const steps = [UploadFileOptions, UploadFileForm, UploadFileMethod]

  function onNextTab(data?: ContextProps) {
    setContext((prevState) => ({ ...prevState, ...data }))
    setStep((prevState) => {
      const nextStep = prevState + 1
      if (nextStep >= steps.length) return prevState
      return nextStep
    })
  }

  console.log(context)

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
