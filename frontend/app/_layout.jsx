import { useCallback, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { ThemeProvider } from "@react-navigation/native"
import { DefaultTheme } from "../constants/Colors"
import { Stack } from "expo-router"
import * as SecureStore from "expo-secure-store"
import * as SplashScreen from "expo-splash-screen"

// Keeps splash screen visible while fetching user details
// SplashScreen.preventAutoHideAsync()

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false)
	const [user, setUser] = useState(null)

	// useEffect(() => {
	// 	async function getUserFromStorage() {
	// 		try {
	// 			let storedUser = await SecureStore.getItemAsync("user")
	// 			if (storedUser !== null) {
	// 				setUser(JSON.parse(storedUser))
	// 			}
	// 		} catch (e) {
	// 			console.warn(e)
	// 		} finally {
	// 			setAppIsReady(true)
	// 		}
	// 	}

	// 	getUserFromStorage()
	// }, [])

	// const onLayoutRootView = useCallback(async () => {
	// 	if (appIsReady) {
	// 		await SplashScreen.hideAsync()
	// 	}
	// }, [appIsReady])

	// if (!appIsReady) {
	// 	return null
	// }

	return (
		<ThemeProvider value={DefaultTheme}>
			<UserContext.Provider value={{ user: user, setUser: setUser }}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="(auth)" options={{ headerShown: false }} />
				</Stack>
			</UserContext.Provider>
		</ThemeProvider>
	)
}
