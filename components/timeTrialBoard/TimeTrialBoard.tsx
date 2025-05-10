import { LinearGradient } from "expo-linear-gradient";
import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet, FlatList } from "react-native";
import { converToMilliseconds } from "@/utils/timeTrialBoardUtils";

interface TimeTrialBoardProp {
    map: string;
    mapAndTime: Record<string, string[]>;
    handleAddTime: (
        map: string, 
        time:string, 
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
        addTime: (map: string, time: string, callback: () => void) => Promise<void>
    ) => Promise<void>;
    handleDeleteTime: (
        time: string, 
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
        deleteTime: (time: string, callback: () => void) => Promise<void>
    ) => Promise<void>;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    addTime: (map: string, time: string, callback: () => void) => Promise<void>;
    deleteTime: (time: string, callback: () => void) => Promise<void>;
}

const TimeTrialBoard: React.FC<TimeTrialBoardProp> = ( { 
    map, 
    mapAndTime, 
    handleAddTime, 
    handleDeleteTime, 
    setTrigger, 
    addTime,
    deleteTime
} ) => {

    const sortedTimes = mapAndTime[map]?.sort((a:any, b:any) => converToMilliseconds(a)-converToMilliseconds(b)) || [];


    return (

        <LinearGradient  
            colors={['#FF1BDC', '#2CBDFE']}
            style={styles.linearBorder}>
            <View 
                style={styles.container}
                testID="time-trial-board-container"
                accessibilityLabel="Time Trial Board Container"
                >
                <FlatList 
                    data={sortedTimes}
                    renderItem={({item}) => <MapTimeContainer 
                        time={item} 
                        handleDeleteTime={handleDeleteTime} 
                        setTrigger={setTrigger}
                        deleteTime={deleteTime}
                        />}
                    keyExtractor={(item) => item}
                />
                
                <AddTime 
                    map={map} 
                    handleAddTime={handleAddTime}  
                    setTrigger={setTrigger}
                    addTime={addTime}
                    />
            </View>
        </LinearGradient>
    )
}

export default TimeTrialBoard

export const styles = StyleSheet.create({
    linearBorder: {
        height: '80%',
        width: '90%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'black',
        width: '98%',
        margin: 10,
        borderRadius: 10,
        borderColor: '#E418C5',
        borderWidth: 1,
        height: '99%',
    }
})