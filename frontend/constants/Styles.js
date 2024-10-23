import { StyleSheet } from "react-native"
import Colors from "./Colors"
import Fonts from "./Fonts"

// default styles for components
export default Styles = StyleSheet.create({
	container: {
		marginHorizontal: 35,
	},
	text: {
		color: Colors.text,
		fontFamily: Fonts.InterRegular,
		fontSize: 16,
	},
	header: {
		color: Colors.text,
		fontFamily: Fonts.InterExtraBold,
		fontSize: 28, // or 20 or 21   or 18 or 24
		paddingVertical: 20,
	},
	subheader: {
		color: Colors.text,
		fontFamily: Fonts.InterSemiBold,
		fontSize: 18,
	},
	error: {
		backgroundColor: Colors.tintedBackground,
		padding: 12,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: Colors.error,
		color: Colors.error,
		fontFamily: Fonts.InterSemiBold,
		fontSize: 16,
	},
	textInput: {
		height: 40,
		paddingLeft: 5,
		color: Colors.text,
		fontSize: 16,
		borderBottomWidth: 2,
		borderBottomColor: Colors.inactiveUI,
	},
	button: {
		backgroundColor: Colors.ui,
		borderRadius: 10,
	},
	buttonText: {
		marginVertical: 12,
		color: Colors.background,
		textAlign: "center",
		fontFamily: Fonts.InterSemiBold,
		fontSize: 16,
	},
	link: {
		fontFamily: Fonts.InterRegular,
		fontSize: 16,
		color: Colors.activeUI,
	},
})
