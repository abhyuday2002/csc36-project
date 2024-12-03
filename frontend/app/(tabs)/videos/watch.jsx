import { View, Text, SafeAreaView, Dimensions } from "react-native"
import { WebView } from "react-native-webview"
import { useLocalSearchParams } from "expo-router"

export default function VideoPlayer() {
	const video = useLocalSearchParams()
	const screenWidth = Dimensions.get("window").width

	return (
		<SafeAreaView style={{flex: 1, width: "100%"}}>
			{video && (
				<View style={{ flex: 1 }}>
					<WebView
						style={{ flex: 1, maxWidth:"100%", maxHeight: screenWidth*9/16, marginVertical: 10 }}
						source={{ uri: `https://www.youtube.com/embed/${video.youtubeId}` }}
						allowsFullscreenVideo
						javaScriptEnabled
					/>
					<View style={{flex: 1.8, padding: 20}}>
						<Text
							style={{ fontSize: 20, fontWeight: "bold", color: Colors.text }}
						>
							{video.title}
						</Text>
						<Text style={{ color: Colors.textSecondary, marginTop: 10 }}>
							Duration: {video.duration}
						</Text>
					</View>
				</View>
			)}
		</SafeAreaView>
	)
}
