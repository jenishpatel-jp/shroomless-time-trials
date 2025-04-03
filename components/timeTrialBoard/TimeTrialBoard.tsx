import { LinearGradient } from "expo-linear-gradient";
import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet, FlatList } from "react-native";

interface TimeTrialBoardProp {
    map: string;
    mapAndTime: Record<string, string[]>;
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    handleDeleteTime: (time: string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeTrialBoard: React.FC<TimeTrialBoardProp> = ( { map, mapAndTime, handleAddTime, handleDeleteTime, setTrigger } ) => {

    const converToMilliseconds = (time: string) => {
        const [minutes, seconds, milliseconds] = time.split(/[:.]/).map(Number);
        return minutes * 60000 + seconds * 1000 + milliseconds;
    };

    const sortedTimes = mapAndTime[map]?.sort((a:any, b:any) => converToMilliseconds(a)-converToMilliseconds(b)) || [];


    return (

        <LinearGradient  
            colors={['#FF1BDC', '#2CBDFE']}
            style={styles.linearBorder}>
            <View style={styles.container}>
                <FlatList 
                    data={sortedTimes}
                    renderItem={({item}) => <MapTimeContainer time={item} handleDeleteTime={handleDeleteTime} setTrigger={setTrigger}/>}
                    keyExtractor={(item) => item}
                />
                
                <AddTime 
                    map={map} 
                    handleAddTime={handleAddTime}  
                    setTrigger={setTrigger}
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