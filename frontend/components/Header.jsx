import { Text } from "react-native"
import Styles from "../constants/Styles"

export default function Header({ title }) {
	return <Text style={Styles.header}>{title}</Text>
}
