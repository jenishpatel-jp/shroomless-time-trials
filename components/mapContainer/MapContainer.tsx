import { View, Image } from "react-native";
import { StyleSheet } from "react-native";

const MapContainer = () => {
  return (
    <View style={styles.container}> 
        <Image 
            source={require('@/assets/images/Old Maps/Mushroom Cup/Mario Kart Stadium.png')}       
            style={styles.image}
        />
    </View>
  )
}

export default MapContainer

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        padding: 10,
        height: 300,
        width: 300,
    },
    image: {
        width: 200,
        height: 300,
        margin: 10,
        padding: 10,
    }
})