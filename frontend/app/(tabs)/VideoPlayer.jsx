import { View, Text, SafeAreaView, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import Header from "../../components/Header";
import Styles from "../../constants/Styles";

export default function VideoPlayer({ route }) {
  const { video } = route.params;
  const screenWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView style={Styles.container}>
      <Header title={video.title} />
      <View style={{ flex: 1 }}>
        <WebView
          style={{ width: screenWidth, height: screenWidth * (9/16) }}
          source={{ uri: `https://www.youtube.com/embed/${video.youtubeId}` }}
          allowsFullscreenVideo
          javaScriptEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.text }}>
            {video.title}
          </Text>
          <Text style={{ color: Colors.textSecondary, marginTop: 10 }}>
            Duration: {video.duration}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}