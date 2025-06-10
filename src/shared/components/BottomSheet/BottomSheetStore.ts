import { BackdropPressBehavior } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'
import { create } from 'zustand'
import { BottomSheet, BottomSheetService } from './BottomSheetTypes'

interface State {
  bottomSheetProps?: BottomSheet | null
  isOpen: boolean
  behavior?: {
    enablePanDownToClose?: boolean
    pressBehavior?: BackdropPressBehavior
  }
}

const initialState: State = {
  bottomSheetProps: null,
  isOpen: false,
  behavior: {
    enablePanDownToClose: true,
    pressBehavior: 'close'
  }
}

const useBottomSheetStore = create<State & BottomSheetService>((set) => ({
  ...initialState,
  onReset: () => set(() => initialState),
  onOpen: (props) => set({ bottomSheetProps: props, isOpen: true }),
  changeBehavior: (props) => set((state) => ({ ...state, behavior: props }))
}))

export function useBottomSheetService(): BottomSheetService {
  const onClose = useBottomSheetStore((state) => state.onReset)
  const onOpen = useBottomSheetStore((state) => state.onOpen)
  const changeBehavior = useBottomSheetStore((state) => state.changeBehavior)

  return {
    onReset: onClose,
    onOpen,
    changeBehavior
  }
}

export function useBottomSheet(): State {
  const behavior = useBottomSheetStore((state) => state.behavior)
  const bottomSheetProps = useBottomSheetStore((state) => state.bottomSheetProps)
  const isOpen = useBottomSheetStore((state) => state.isOpen)

  return {
    bottomSheetProps,
    isOpen,
    behavior
  }
}
