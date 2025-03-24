import { View, StyleSheet } from "react-native";
import MapTime from "./MapTime";
import DeleteButton from "../buttons/DeleteButton";

const MapTimeContainer = () => {
  return (
    <View style={styles.container}>
        <MapTime  />
        <DeleteButton />
    </View>
  )
}

export default MapTimeContainer

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'black',
        width: '90%',
        height: 50,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: 'white',
        borderWidth: 1,
    }

})

