import { Platform } from "react-native"

export default fonts = {
	InterRegular: Platform.select({
		android: "Inter_400Regular",
		ios: "Inter-Regular",
	}),
	InterExtraBold: Platform.select({
		android: "Inter_800ExtraBold",
		ios: "Inter-ExtraBold",
	}),
	InterSemiBold: Platform.select({
		android: "Inter_600SemiBold",
		ios: "Inter-SemiBold"
	})
}
