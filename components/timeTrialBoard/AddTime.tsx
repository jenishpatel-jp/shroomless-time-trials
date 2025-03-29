import { TextInput, View, StyleSheet } from 'react-native'
import AddButton from '../buttons/AddButton'
import { useState } from 'react';

interface AddTimeProps {
    singleMapName: string;
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTime: React.FC<AddTimeProps> = ( { singleMapName, handleAddTime, setTrigger } ) => {

    const [time, setTime] = useState<string>("")

    return (
        <View style={styles.container}> 
            <TextInput 
                placeholder={time}
                style={styles.input}
                placeholderTextColor={'white'}
                onChangeText={(text) => setTime}
            />
            <AddButton  
                handleAddTime={handleAddTime}
                time={time}
                singleMapName={singleMapName}
                setTrigger={setTrigger}
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