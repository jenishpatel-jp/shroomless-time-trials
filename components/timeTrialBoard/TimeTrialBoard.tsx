import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet } from "react-native";

interface TimeTrialBoardProp {
    addTime: (map: string, time: string, callback?: ()=> void) => Promise<void>;
    deleteTime: (time:string, callback?: ()=> void)=> Promise<void>;    
    getTimes: ()=> Promise<Record<string, string[]>>;
    mapName: string | string[];
    mapAndTime: Record<string, string[]>
}

const TimeTrialBoard: React.FC<TimeTrialBoardProp> = ( { addTime, deleteTime, getTimes, mapName, mapAndTime } ) => {



    return (
        <View style={styles.container}>
            <MapTimeContainer />
            <AddTime />
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