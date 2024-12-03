import { Stack } from "expo-router"

export default function VideosStack() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
			<Stack.Screen name="watch" options={{ headerShown: false }} />
		</Stack>
	)
}
