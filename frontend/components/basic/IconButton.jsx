import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { Pressable } from "react-native"
import Colors from "../../constants/Colors"

export default function IconButton({
	onPress,
	name,
	size = 32,
	color = Colors.text,
}) {
	return (
		<Pressable onPress={onPress}>
			<MaterialCommunityIcons name={name} size={size} color={color} />
		</Pressable>
	)
}
