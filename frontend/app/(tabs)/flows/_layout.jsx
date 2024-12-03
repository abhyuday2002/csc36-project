import { Stack } from "expo-router"

export default function FlowsStack() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ headerShown: false }} />
		</Stack>
	)
}
