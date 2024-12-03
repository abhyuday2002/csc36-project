import { Tabs } from "expo-router"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import Colors from "../../constants/Colors"
import Fonts from "../../constants/Fonts"

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.activeUI,
				tabBarInactiveTintColor: Colors.inactiveUI,
				tabBarLabelStyle: { fontFamily: Fonts.InterRegular, fontSize: 12 },
				tabBarStyle: { paddingTop: 2 },
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerShown: false,
					tabBarLabel: "Home",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="home" size={32} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="calendar"
				options={{
					headerShown: false,
					tabBarLabel: "Calendar",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="calendar" size={32} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="videos"
				options={{
					headerShown: false,
					tabBarLabel: "Lessons",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name="play-circle-outline"
							size={32}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="flows"
				options={{
					headerShown: false,
					tabBarLabel: "Flows",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="yoga" size={32} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerShown: false,
					tabBarLabel: "Profile",
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name="account" size={32} color={color} />
					),
				}}
			/>
		</Tabs>
	)
}
