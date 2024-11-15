import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import { useContext, useEffect, useState } from "react"
import {
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useRouter } from "expo-router"
import { UserContext } from "../../../context/UserContext"
import Colors from "../../../constants/Colors"
import Header from "../../../components/Header"
import Styles from "../../../constants/Styles"
import {
	logOut,
	updateProfilePhoto,
	updateUserDetails,
} from "../../../utils/authUtils"
import Input from "../../../components/basic/Input"

export default function ProfileScreen() {
	const router = useRouter()
	const userContext = useContext(UserContext)
	const user = userContext.user
	const setUser = userContext.setUser
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [image, setImage] = useState(
		<MaterialCommunityIcons
			style={styles.image}
			size={125}
			name="account-circle"
			color={"#abbdc9"}
		/>
	)

	useEffect(() => {
		if (user == null) {
			router.navigate("/profile/no-profile")
		} else if (user.profilePic !== null) {
			setImage(<Image source={{ uri: user.profilePic }} style={styles.image} />)
		}
	}, [user])

	const pickProfile = async () => {
		try {
			await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [3, 3],
			}).then((result) => {
				if (!result.canceled) {
					updateProfilePhoto(result.assets[0].uri, user, setUser)
				}
			})
		} catch (e) {
			console.warn(e)
		}
	}

	const updateProfile = () => {
		updateUserDetails(name, email, password, user, setUser)
		setName("")
		setEmail("")
		setPassword("")
	}

	const logout = () => {
		logOut(setUser)
		router.navigate("/profile/no-profile")
		return <></>
	}

	return (
		<SafeAreaView style={Styles.container}>
			<View style={styles.container}>
				<Header title="Profile" />
				{image && <Pressable onPress={pickProfile}>{image}</Pressable>}
				<View style={Styles.input}>
					<Text style={Styles.text}>Name</Text>
					<Input
						placeholder={user?.name}
						value={name}
						autoComplete="name"
						onChangeText={(text) => setName(text)}
						style={Styles.textInput}
					/>
				</View>
				<View style={Styles.input}>
					<Text style={Styles.text}>Email Address</Text>
					<Input
						placeholder={user?.email?.text}
						value={email}
						inputMode="email"
						autoComplete="email"
						onChangeText={(text) => setEmail(text)}
						style={Styles.textInput}
					/>
				</View>
				<View style={Styles.input}>
					<Text style={Styles.text}>Password</Text>
					<Input
						placeholder="********"
						value={password}
						autoComplete="new-password"
						onChangeText={(text) => setPassword(text)}
						style={Styles.textInput}
						placeholderTextColor={Colors.text}
					/>
				</View>
				<Pressable onPress={updateProfile} style={Styles.button}>
					<Text style={Styles.buttonText}>Update Profile</Text>
				</Pressable>
				<Pressable onPress={logout} style={Styles.button}>
					<Text style={Styles.buttonText}>Log Out</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		gap: 15,
	},
	image: {
		width: 125,
		height: 125,
		alignSelf: "center",
		borderRadius: 62,
	},
})
