import { View, StyleSheet } from "react-native";
import MapTime from "./MapTime";
import DeleteButton from "../buttons/DeleteButton";

interface MapTimeContainerProp {
  time: string;
  handleDeleteTime: (time: string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const MapTimeContainer: React.FC<MapTimeContainerProp> = ( {time, handleDeleteTime, setTrigger} ) => {
  return (
    <View style={styles.container}>
        <MapTime time={time}  />
        <DeleteButton time={time} handleDeleteTime={handleDeleteTime} setTrigger={setTrigger} />
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

