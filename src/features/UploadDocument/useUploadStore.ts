import { UploadedCatetoryAPI } from '@/src/entities/UploadedDocuments/UploadDocument'
import { UploadFileMethods } from '@/src/screens/app/UploadedDocuments/UploadedDocumentListScreen/components/UploadFileStepper/steps/UploadFileMethod'
import { create } from 'zustand'

interface State {
  category?: UploadedCatetoryAPI
  method?: UploadFileMethods
  title?: string
}

interface Actions {
  setCategory(category: UploadedCatetoryAPI): void
  setMethod(method: UploadFileMethods): void
  setTitle(title: string): void
}

const initialState: State = {}

const useStore = create<State & Actions>((set) => ({
  ...initialState,
  setCategory: (category) => set({ category }),
  setMethod: (method) => set({ method }),
  setTitle: (title) => set({ title })
}))

export function useUploadStore(): State {
  const { category, method, title } = useStore((state) => state)
  return {
    category,
    method,
    title
  }
}

export function useUploadActions(): Actions {
  const setCategory = useStore((state) => state.setCategory)
  const setMethod = useStore((state) => state.setMethod)
  const setTitle = useStore((state) => state.setTitle)

  return {
    setCategory,
    setMethod,
    setTitle
  }
}
