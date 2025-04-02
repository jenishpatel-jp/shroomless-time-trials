import { TextInput, View, StyleSheet } from 'react-native'
import AddButton from '../buttons/AddButton'
import { useEffect, useState } from 'react';

interface AddTimeProps {
    map: string;
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTime: React.FC<AddTimeProps> = ( { map, handleAddTime, setTrigger } ) => {

    const [time, setTime] = useState<string>("");

    useEffect(() => {
        console.log("time", time)
    }, [time]);

    const formatTimeInput = (input: string) => {
        // Remove existing ':' and '.' before formatting
        let raw = input.replace(/[:.]/g, "");
    
        let formatted = raw;
        if (raw.length >= 2) {
            formatted = `${raw.slice(0, 1)}:${raw.slice(1)}`;
        }
        if (raw.length >= 5) {
            formatted = `${formatted.slice(0, 4)}.${formatted.slice(4)}`;
        }
    
        return formatted;
    };


    return (
        <View style={styles.container}> 
            <TextInput 
                placeholder={'0:00.000'}
                style={styles.input}
                placeholderTextColor={'white'}
                onChangeText={(text) => setTime(formatTimeInput(text))}
                value={time}
                textAlign='center'
                keyboardType='numeric'
                maxLength={8}
        
            />
            <AddButton  
                handleAddTime={handleAddTime}
                time={time}
                map={map}
                setTrigger={setTrigger}
                setTime={setTime}
            />
        </View>
    )
}

export default AddTime

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        height: 120,
        width: '90%',
    },
    input: {
        height: 50,
        width: '100%',
        margin: 5,
        borderWidth: 1,
        fontSize: 20,
        color: 'white',
        borderColor: 'white',
        borderRadius: 10,
        textAlign: 'center',
        backgroundBlendMode: 'darken',
        backgroundColor: 'black',
    },
})