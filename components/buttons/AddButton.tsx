import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, StyleSheet } from "react-native"

interface AddButtonProps {
    handleAddTime: (map: string, time:string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    time: string;
    map: string;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: React.Dispatch<React.SetStateAction<string>>
}

const AddButton: React.FC<AddButtonProps> = ( { handleAddTime, time, map, setTrigger, setTime } ) => {

    const addTimeAndReset = () => {
        handleAddTime(map, time, setTrigger)
        setTime("")
    }

    return (
        <LinearGradient 
            colors={['#FF1BDC', '#2CBDFE']} 
            style={styles.linearBorder}
 
        >
            <Pressable 
                onPress={addTimeAndReset}
                style={styles.button}>
                    <Text style={styles.text}>Add</Text>
            </Pressable>
        </LinearGradient>

    )
};

export default AddButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 10,
        padding: 10,
        borderColor: '#E418C5',
        borderWidth: 1,
        width: '97%',
        margin: 2,
        height: '97%',
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    linearBorder: {
        height:60,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
    },
});