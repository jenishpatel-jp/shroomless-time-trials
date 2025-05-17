import { Pressable, View, StyleSheet } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface DeleteButtonProps {
    time: string;
    handleDeleteTime: (
        time: string, 
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
        deleteTime: (time: string) => Promise<void>
    ) => Promise<void>;
    deleteTime: (time: string) => Promise<void>;
    map: string;

}

const DeleteButton: React.FC<DeleteButtonProps> = ( { time, handleDeleteTime, deleteTime, map} ) => {
    return (
        <View style={styles.deleteButton}>
            <Pressable
                onPress={()=> handleDeleteTime(time, map, deleteTime)}
                accessibilityRole="button"
                accessibilityLabel="Delete time"
            >
                <FontAwesome6 
                    name="trash-can" size={24} 
                    color="#FF1BDC"
                    
                    />
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