import { useEffect, useRef } from 'react'
import { BackHandler, StyleSheet } from 'react-native'

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  default as RNBottomSheet
} from '@gorhom/bottom-sheet'
import { useBottomSheet, useBottomSheetService } from './BottomSheetStore'

const DEFAULT_SNAPPOINTS = ['90%']

export function BottomSheet() {
  const bottomRef = useRef<RNBottomSheet>(null)
  const { isOpen, bottomSheetProps: modalProps, behavior } = useBottomSheet()
  const { onReset: onClose } = useBottomSheetService()

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (isOpen) {
        return true
      }
      return false
    })
    return () => backHandler.remove()
  }, [isOpen])

  const snapPoints = modalProps?.snapPoints ?? DEFAULT_SNAPPOINTS

  function onChange(snapPoint: number) {
    if (snapPoint === -1) {
      if (modalProps?.onClose) {
        modalProps.onClose()
      }
      onClose()
    }
  }

  function renderBackdrop(props: BottomSheetBackdropProps) {
    return (
      <BottomSheetBackdrop
        pressBehavior={behavior?.pressBehavior}
        disappearsOnIndex={-1}
        {...props}
      />
    )
  }

  return (
    <>
      {isOpen ? (
        <RNBottomSheet
          index={isOpen ? 0 : -1}
          ref={bottomRef}
          enablePanDownToClose={behavior?.enablePanDownToClose}
          onChange={onChange}
          backdropComponent={renderBackdrop}
          snapPoints={snapPoints}
          animationConfigs={{
            duration: 200
          }}
        >
          <BottomSheetView style={$style.default}>{modalProps?.Component}</BottomSheetView>
        </RNBottomSheet>
      ) : null}
    </>
  )
}

const $style = StyleSheet.create({
  default: {
    padding: 16,
    flex: 1
  }
})
