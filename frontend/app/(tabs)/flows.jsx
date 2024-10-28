import { View, Text, SafeAreaView } from "react-native"
import Styles from "../../constants/Styles"
import Header from "../../components/Header"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Colors from "../../constants/Colors"

export default function FlowsTab() {
	return (
		<SafeAreaView style={Styles.container}>
			<Header title="Flows" />
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
