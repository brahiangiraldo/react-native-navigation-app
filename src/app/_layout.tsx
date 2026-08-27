import { Slot, SplashScreen } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { useFonts } from "expo-font"
import { useEffect } from "react"
import { Platform } from "react-native"
import * as NavigationBar from "expo-navigation-bar"
import './global.css'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from "react-native-gesture-handler"

const isAndroid = Platform.OS === 'android'

if (isAndroid) {
    NavigationBar.setStyle('dark')
}

SplashScreen.preventAutoHideAsync()


const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({

        'WorkSans-Black': require('@/assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('@/assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('@/assets/fonts/WorkSans-Medium.ttf'),
    })



    useEffect(() => {
        if (error) {
            console.warn('Font loading error:', error);
        }
        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) {
        return null
    }

    return (
        // <SafeAreaProvider>
        //     <Slot />
        // </SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <Slot />
            </SafeAreaProvider>
        </GestureHandlerRootView>
    )
}

export default RootLayout