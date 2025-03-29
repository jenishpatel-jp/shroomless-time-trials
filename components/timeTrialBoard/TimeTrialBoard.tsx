import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet } from "react-native";

interface TimeTrialBoardProp {
    singleMapName: string;
    mapAndTime: Record<string, string[]>;
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    handleDeleteTime: (time: string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeTrialBoard: React.FC<TimeTrialBoardProp> = ( { singleMapName, mapAndTime, handleAddTime, handleDeleteTime, setTrigger } ) => {

    const listMapTimeContainer = mapAndTime[singleMapName].map(time => {
        <MapTimeContainer time={time} />
    })

    return (
        <View style={styles.container}>
            
            <AddTime 
                singleMapName={singleMapName} 
                handleAddTime={handleAddTime}  
                setTrigger={setTrigger}
                />
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