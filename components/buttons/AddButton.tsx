import { LinearGradient } from "expo-linear-gradient";
import { Pressable, Text, StyleSheet } from "react-native"

interface AddButtonProps {
    handleAddTime: (
        map: string, 
        time:string, 
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
        addTime: (map: string, time: string, callback: () => void) => Promise<void>
    ) => Promise<void>;
    time: string;
    map: string;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: React.Dispatch<React.SetStateAction<string>>;
    addTime: (map: string, time: string, callback: () => void) => Promise<void>;
}

const AddButton: React.FC<AddButtonProps> = ( { handleAddTime, time, map, setTrigger, setTime, addTime } ) => {

    const addTimeAndReset = () => {
        handleAddTime(map, time, setTrigger, addTime)
        setTime("")
    }

    return (
        <LinearGradient 
            colors={['#FF1BDC', '#2CBDFE']} 
            style={styles.linearBorder}
 
        >
            <Pressable 
                onPress={addTimeAndReset}
                style={styles.button}
                accessibilityLabel="Add Time Button"
                accessibilityHint="Press to add time to the map"
                accessibilityRole="button"
                >
                
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
        margin: 5,
        height: '97%',
    },
    text: {
        color: '#2CBDFE',
        fontSize: 20,
        textAlign: 'center',
    },
    linearBorder: {
        height: 50,
        width: 110,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        margin: 5,
    },
});