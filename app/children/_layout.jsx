import { Stack } from "expo-router";
import { AppProvider } from '@/app-context'

export default function RootLayout() {
  return(
    <AppProvider>
      <Stack screenOptions={{headerShown:false}}/> 
    </AppProvider>
  )
}