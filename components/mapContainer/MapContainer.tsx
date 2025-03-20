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
        width: 320,
        height: 220,
    },
    image: {
        width: 300,
        height: 200,
    }
})