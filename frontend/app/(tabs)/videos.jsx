import { View, Text, SafeAreaView } from "react-native"
import Header from "../../components/Header"
import Styles from "../../constants/Styles"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

export default function VideosTab() {
	return (
		<SafeAreaView style={Styles.container}>
			<Header title="Lessons" />
			<View style={{ flexDirection: "row" }}>
				<MaterialCommunityIcons
					name="wrench-outline"
					size={20}
					color={Colors.text}
				/>
				<Text style={Styles.text}>This feature is under construction </Text>
				<MaterialCommunityIcons
					name="wrench-outline"
					size={20}
					color={Colors.text}
				/>
			</View>
		</SafeAreaView>
	)
}
