import { StyleSheet, Text, TextInput, View } from "react-native"
import Colors from "../../constants/Colors"
import Styles from "../../constants/Styles"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

export default function Input({
	label,
	icon,
	value,
	onChangeText,
	placeholder,
	slim,
	style,
	textStyle,
	...props
}) {
	return (
		<View style={style}>
			{label && <Text style={Styles.text}>{label}</Text>}
			<View style={slim ? styles.slim : styles.normal}>
				{icon && (
					<MaterialCommunityIcons
						name={icon}
						size={24}
						color={Colors.inactiveUI}
						style={{ alignSelf: "center", paddingRight: 5 }}
					/>
				)}
				<TextInput
					value={value}
					onChangeText={onChangeText}
					placeholder={placeholder}
					placeholderTextColor={Colors.textPlaceholder}
					style={{ ...Styles.textInput, ...textStyle }}
					{...props}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	normal: {
		flexDirection: "row",
		height: 40,
		borderBottomWidth: 2,
		borderColor: Colors.inactiveUI,
	},
	slim: {
		flexDirection: "row",
		height: 30,
		borderBottomWidth: 2,
		borderColor: Colors.inactiveUI,
	},
})
