import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header"
import Styles from "../../constants/Styles"
import Colors from "../../constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"

const DUMMY_VIDEOS = [
  {
    id: '1',
    title: 'Morning Yoga Flow',
    duration: '20 min',
    thumbnail: 'https://img.youtube.com/vi/PLACEHOLDER1/0.jpg',
    youtubeId: 'PLACEHOLDER1'
  },
  {
    id: '2',
    title: 'Beginner Yoga Class',
    duration: '30 min',
    thumbnail: 'https://img.youtube.com/vi/PLACEHOLDER2/0.jpg',
    youtubeId: 'PLACEHOLDER2'
  },
];

const VideoCard = ({ video, onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={{
      backgroundColor: Colors.card,
      borderRadius: 10,
      margin: 10,
      padding: 10,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
    }}
  >
    <Image
      source={{ uri: video.thumbnail }}
      style={{ width: '100%', height: 200, borderRadius: 8 }}
      resizeMode="cover"
    />
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.text }}>
        {video.title}
      </Text>
      <Text style={{ color: Colors.textSecondary }}>
        Duration: {video.duration}
      </Text>
    </View>
  </TouchableOpacity>
);


export default function VideosScreen() {
	  const navigation = useNavigation();
	
	  const handleVideoPress = (video) => {
	    navigation.navigate('VideoPlayer', { video });
	  };
	
	  return (
	    <SafeAreaView style={Styles.container}>
	      <Header title="Yoga Videos" />
	      <FlatList
	        data={DUMMY_VIDEOS}
	        renderItem={({ item }) => (
	          <VideoCard video={item} onPress={() => handleVideoPress(item)} />
	        )}
	        keyExtractor={(item) => item.id}
	        contentContainerStyle={{ padding: 10 }}
	      />
	    </SafeAreaView>
	  );
	}
