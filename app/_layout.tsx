import { Slot, Stack } from "expo-router";
import { AppProvider } from '@/app-context'

export default function RootLayout() {
  return (
    <AppProvider>
      <Slot/> 
    </AppProvider>
    )
}
