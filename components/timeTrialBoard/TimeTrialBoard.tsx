import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet } from "react-native";

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

    const sortedTimes = mapAndTime[map]?.sort((a:any, b:any) => converToMilliseconds(a)-converToMilliseconds(b)).slice(0, 5) || [];

    const listMapTimeContainer = sortedTimes.map(time => <MapTimeContainer key={time} time={time} handleDeleteTime={handleDeleteTime} setTrigger={setTrigger}/>)

    return (
        <View style={styles.container}>
            { sortedTimes.length > 0 ? (listMapTimeContainer):(<View></View>)}
            
            <AddTime 
                map={map} 
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