import { BackdropPressBehavior } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types'

export interface BottomSheet {
  Component: React.ReactElement
  snapPoints: string[]
  onClose?: () => void
}

export interface BottomSheetService {
  onOpen: (props: BottomSheet) => void
  onReset: () => void
  changeBehavior: (props: {
    enablePanDownToClose?: boolean
    pressBehavior?: BackdropPressBehavior
  }) => void
}
