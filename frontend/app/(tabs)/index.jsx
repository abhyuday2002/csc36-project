import {
	FlatList,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native"
import Header from "../../components/Header"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"
import { Link, useRouter } from "expo-router"
import Colors from "../../constants/Colors"
import Styles from "../../constants/Styles"

const recentVideos = [
	{ title: "Yoga Video", uri: "", duration: "5:00" },
	{ title: "Yoga Video", uri: "", duration: "5:00" },
]

const recentFlows = [
	{ title: "Temp Flow", uri: "" },
	{ title: "Temp Flow", uri: "" },
]

export default function HomeScreen() {
	const { user } = useContext(UserContext)

	const renderClass = ({ lesson }) => (
		<View style={styles.classCard}>
			<Text>{lesson.date}</Text>
			<Text>{lesson.time}</Text>
			<Text>{lesson.title}</Text>
			<Text>{lesson.instructor}</Text>
		</View>
	)

	const renderVideoCard = (video) => (
		<Pressable
			onPress={() => {
				// navigate to video
			}}
			style={styles.card}
		>
			<View style={styles.image}></View>
			<Text style={styles.cardText}>{video?.title}</Text>
		</Pressable>
	)

	const renderFlowCard = (flow) => (
		<Pressable
			onPress={() => {
				// navigate to flow
			}}
			style={styles.card}
		>
			<View style={styles.image}></View>
			<Text style={styles.cardText}>{flow?.title}</Text>
		</Pressable>
	)

	console.log(user)

	return (
		<SafeAreaView style={Styles.container}>
			<View style={styles.greetingView}>
				<Text style={{...Styles.header, color: Colors.ui}}>
					{"Hello, " + (user?.name ? user.name : "Guest")}
				</Text>
			</View>
			{user === null && (
				<View>
					<Link style={Styles.buttonText} push href="/login">
						Log in
					</Link>
				</View>
			)}
			{user !== null && (
				<View style={{ gap: 10 }}>
					<View>
						<Text style={styles.sectionTitle}>Upcoming Classes</Text>
						<View style={styles.listView}>
							<FlatList
								data={user.classes}
								renderItem={renderClass}
								extraData={user}
								ListEmptyComponent={() => (
									<Link style={Styles.text} href="/calendar">
										No Classes
									</Link>
								)}
							/>
						</View>
					</View>
					<View>
						<Text style={styles.sectionTitle}>Recent Videos</Text>
						<View style={styles.listView}>
							<FlatList
								data={recentVideos}
								renderItem={({ item }) => renderVideoCard(item)}
								horizontal
								contentContainerStyle={{ gap: 10 }}
								extraData={user}
								ListEmptyComponent={() => (
									<Link style={Styles.text} href="/videos">
										No Videos
									</Link>
								)}
							/>
						</View>
					</View>
					<View>
						<Text style={styles.sectionTitle}>Saved Flows</Text>
						<View style={styles.listView}>
							<FlatList
								data={recentFlows}
								renderItem={({ item }) => renderFlowCard(item)}
								horizontal
								contentContainerStyle={{ gap: 10 }}
								extraData={user}
								ListEmptyComponent={() => (
									<Link style={Styles.text} href="/flows">
										No Flows
									</Link>
								)}
							/>
						</View>
					</View>
				</View>
			)}
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	greetingView: { marginTop: 10 },
	classView: {
		backgroundColor: Colors.tintedBackground,
		padding: 5,
	},
	classCard: {
		backgroundColor: Colors.background,
		padding: 5,
	},
	sectionTitle: {
		...Styles.subheader,
		borderBottomWidth: 2,
	},
	listView: {
		backgroundColor: Colors.tintedBackground,
		padding: 10,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: Colors.border,
	},
	list: {
		gap: 10,
	},
	card: {
		backgroundColor: Colors.background,
		overflow: "hidden",
		borderWidth: 1,
		borderRadius: 10,
		borderColor: Colors.border,
	},
	cardText: {
		...Styles.text,
		padding: 10,
	},
	image: {
		height: 80,
		aspectRatio: "4/3",
		backgroundColor: Colors.tintedBackground,
	},
})
