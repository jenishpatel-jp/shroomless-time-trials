import { LinearGradient } from "expo-linear-gradient";
import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet, FlatList } from "react-native";
import { converToMilliseconds } from "@/utils/timeTrialBoardUtils";
import { useComputed } from "@legendapp/state/react"; // need to look into this
import { state$ } from "@/app/_layout";

interface TimeTrialBoardProp {
    map: string;
    handleAddTime: (
        map: string, 
        time:string, 
        addTime: (map: string, time: string) => Promise<void>
    ) => Promise<void>;
    handleDeleteTime: (
        time: string, 
        deleteTime: (time: string) => Promise<void>
    ) => Promise<void>;
    addTime: (map: string, time: string) => Promise<void>;
    deleteTime: (time: string) => Promise<void>;
}

const TimeTrialBoard: React.FC<TimeTrialBoardProp> = ( { 
    map,  
    handleAddTime, 
    handleDeleteTime, 
    addTime,
    deleteTime
} ) => {

    // Use Legend State to derive sorted times reactively
    const sortedTimes = useComputed(() => {
        const times = state$.mapAndTime.get()[map] || [];
        return [...times].sort((a, b) => converToMilliseconds(a) - converToMilliseconds(b));
    });
    

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
                    data={sortedTimes.get()}
                    renderItem={({item}) => 
                    <MapTimeContainer 
                        time={item} 
                        handleDeleteTime={handleDeleteTime} 
                        deleteTime={deleteTime}
                        map={map}
                        />}
                    keyExtractor={(item) => item}
                />
                
                <AddTime 
                    map={map} 
                    handleAddTime={handleAddTime}  
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