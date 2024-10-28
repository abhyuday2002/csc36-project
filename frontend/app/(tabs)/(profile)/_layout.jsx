import { Stack } from "expo-router"

export default function ProfileScreen() {
	return (
		<Stack>
			<Stack.Screen name="profile" options={{ headerShown: false }} />
			<Stack.Screen name="no-profile" options={{ headerShown: false }} />
		</Stack>
	)
}
