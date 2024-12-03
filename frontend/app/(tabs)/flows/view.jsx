import { FlatList, Image, SafeAreaView, View } from "react-native"
import IconButton from "../../../components/basic/IconButton"

export default function ViewFlow() {
	return (
		<SafeAreaView>
			<View>
				<Image />
				<Text>Title</Text>
                <IconButton name="edit" />
			</View>
            <View>
                <FlatList />
            </View>
		</SafeAreaView>
	)
}
