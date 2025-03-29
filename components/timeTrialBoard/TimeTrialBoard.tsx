import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet } from "react-native";

interface TimeTrialBoardProp {
    mapName: string | string[];
    mapAndTime: Record<string, string[]>;
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<Boolean>>) => Promise<void>;
    handleDeleteTime: (time: string, setTrigger: React.Dispatch<React.SetStateAction<Boolean>>) => Promise<void>;
}

const TimeTrialBoard: React.FC<TimeTrialBoardProp> = ( { mapName, mapAndTime, handleAddTime, handleDeleteTime } ) => {



    return (
        <View style={styles.container}>
            <MapTimeContainer />
            <AddTime mapName={mapName} handleAddTime={handleAddTime}  />
        </View>
    )
}

export default TimeTrialBoard

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'black',
        width: '90%',
        margin: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        height: '70%',
    }
})