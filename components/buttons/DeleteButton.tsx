import { Pressable, View, StyleSheet } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface DeleteButtonProps {
    time: string;
    handleDeleteTime: (time: string, setTrigger: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteButton: React.FC<DeleteButtonProps> = ( { time, handleDeleteTime, setTrigger} ) => {
    return (
        <View style={styles.deleteButton}>
            <Pressable
                onPress={()=> handleDeleteTime(time, setTrigger)}
            >
                <FontAwesome6 name="trash-can" size={24} color="#FF1BDC" />
            </Pressable>
        </View>
        
  )
}

export default DeleteButton

const styles = StyleSheet.create({
    deleteButton: {
        marginRight: 10,
    }

})