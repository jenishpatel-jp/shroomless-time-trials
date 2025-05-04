import { TextInput, View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import AddButton from '../buttons/AddButton'
import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


interface AddTimeProps {
    map: string;
    handleAddTime: (
        map: string, 
        time:string, 
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
        addTime: (map: string, time: string, callback: () => void) => Promise<void>
    ) => Promise<void>;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    addTime: (map: string, time: string, callback: () => void) => Promise<void>;
}

const AddTime: React.FC<AddTimeProps> = ( { map, handleAddTime, setTrigger, addTime } ) => {

    const [time, setTime] = useState<string>("");


    // Currently not been used while troubleshooting the time input
    const formatTimeInput = (input: string) => {
        // Remove existing ':' and '.' before formatting
        let raw = input.replace(/[:.]/g, "");
        if (raw === '') return ''; // Return empty string if input is empty
        let formatted = raw;
        if (raw.length >= 2) {
            formatted = `${raw.slice(0, 1)}:${raw.slice(1)}`;
        }
        if (raw.length >= 5) {
            formatted = `${formatted.slice(0, 4)}.${formatted.slice(4)}`;
        }
    
        return formatted;
    };

    const handleChangeText = (text: string) => {
        if (text === '') {
          setTime('');
        } else {
          setTime(formatTimeInput(text));
        }
      };




    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}

        > 
            <LinearGradient
                colors={['#FF1BDC', '#2CBDFE']} 
                style={styles.linearBorder}
                >
                
                <TextInput 
                    placeholder={'0:00.000'}
                    placeholderTextColor={'#009FE5'}
                    value= {time}
                    onChangeText={handleChangeText}
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
                addTime={addTime}
            />
        </KeyboardAvoidingView>
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