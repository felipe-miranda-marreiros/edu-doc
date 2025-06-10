import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { BottomSheet } from '../shared/components/BottomSheet/BottomSheet'
import { loadAndSaveFiles } from '../shared/utils/loadAndSaveFiles'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export function Providers({ children }: PropsWithChildren) {
  useEffect(() => {
    loadAndSaveFiles()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        {children}
        <BottomSheet />
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
