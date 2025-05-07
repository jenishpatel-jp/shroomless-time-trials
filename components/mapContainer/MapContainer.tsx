import { LinearGradient } from "expo-linear-gradient";
import { View, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

type MapContainerProps = {image: any, name: string}

const MapContainer = ({ image, name }:MapContainerProps ) => {

    const router = useRouter();
    
    return (
        <TouchableOpacity onPress={()=> router.push({ pathname:"/map/[mapName]", params: { mapName:name } })} >
            <LinearGradient 
                colors={['#FF1BDC', '#2CBDFE']}
                style={styles.container}>
                <Image 
                    source={image}       
                    style={styles.image}
                    testID="map-image"
                    accessibilityRole="image"
                />
            </LinearGradient>
        </TouchableOpacity>
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