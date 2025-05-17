import { View, StyleSheet } from "react-native";
import MapTime from "./MapTime";
import DeleteButton from "../buttons/DeleteButton";
import { LinearGradient } from "expo-linear-gradient";

interface MapTimeContainerProp {
  time: string;
  map: string;
}

const MapTimeContainer: React.FC<MapTimeContainerProp> = ( {time, map} ) => {
  return (
    <LinearGradient 
      colors={['#FF1BDC', '#2CBDFE']}
      style={styles.linearBorder}
    >
      <View style={styles.container}>
          <MapTime time={time}  />
          <DeleteButton 
            time={time} 
            map={map}
            />
      </View>
    </LinearGradient>
  )
}

export default MapTimeContainer

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'black',
        width: '98%',
        height: '96%',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
    },
    linearBorder: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: '100%',
      height: 60,
      marginVertical: 10,

    }

})

