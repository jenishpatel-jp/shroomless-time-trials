import { TextInput, View, StyleSheet } from 'react-native'
import AddButton from '../buttons/AddButton'
import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

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
            <LinearGradient
                colors={['#FF1BDC', '#2CBDFE']} 
                style={styles.linearBorder}
                >
                
                <TextInput 
                    placeholder={'0:00.000'}
                    placeholderTextColor={'#009FE5'}
                    onChangeText={(text) => setTime(formatTimeInput(text))}
                    value={time}
                    style={styles.input}
                    textAlign='center'
                    keyboardType='numeric'
                    maxLength={8}
            
                />
            </LinearGradient>
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
        height: 130,
        width: '90%',
    },
    linearBorder: {
        height: 50,
        width: '100%',
        margin: 2,
        borderWidth: 1,
        fontSize: 20,
        color: '#009FE5',
        borderRadius: 10,
        textAlign: 'center',
        backgroundBlendMode: 'darken',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        height: '90%',
        width: '98%',
        margin: 2,
        fontSize: 20,
        color: '#2CBDFE',
        borderRadius: 10,
        textAlign: 'center',
        backgroundBlendMode: 'darken',
        backgroundColor: 'black',
        fontWeight: 'bold',
    }
})