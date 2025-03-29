import { TextInput, View, StyleSheet } from 'react-native'
import AddButton from '../buttons/AddButton'
import { useState } from 'react';

interface AddTimeProps {
    mapName: string | string[];
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<Boolean>>) => Promise<void>;
}

const [time, setTime] = useState<string>("")

const AddTime: React.FC<AddTimeProps> = ( { mapName, handleAddTime } ) => {

    return (
        <View style={styles.container}> 
            <TextInput 
                placeholder="0:00.000"
                style={styles.input}
                placeholderTextColor={'white'}
                onChangeText={(text) => console.log(text)}
            />
            <AddButton  />
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