import { LinearGradient } from "expo-linear-gradient";
import { View, Image } from "react-native";
import { StyleSheet } from "react-native";

type MapContainerProps = {image: any}

const MapContainer = ({ image }:MapContainerProps ) => {
  return (
    <LinearGradient 
        colors={['#C01D6C', '#3DDAF9']}
        style={styles.container}>
        <Image 
            source={image}       
            style={styles.image}
        />
    </LinearGradient>
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
        margin: 10,
        borderRadius: 10,
    },
    image: {
        width: 300,
        height: 200,
    }
})