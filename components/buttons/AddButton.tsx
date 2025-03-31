import { Pressable, Text, StyleSheet } from "react-native"

interface AddButtonProps {
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    time: string;
    map: string;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: React.Dispatch<React.SetStateAction<string>>
}

const AddButton: React.FC<AddButtonProps> = ( { handleAddTime, time, map, setTrigger, setTime } ) => {

    return (
        <Pressable 
            onPress={() => handleAddTime(map, time, setTrigger)}
            style={styles.button}>
                <Text style={styles.text}>Add</Text>
        </Pressable>
    )
}

export default AddButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        width: '20%',
        margin: 5,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    }
})