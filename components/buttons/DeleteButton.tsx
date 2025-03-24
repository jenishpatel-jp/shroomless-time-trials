import { Pressable, View, StyleSheet } from "react-native"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const DeleteButton = () => {
    return (
        <View style={styles.deleteButton}>
            <Pressable
                onPress={()=>console.log('Delete')}
            >
                <FontAwesome6 name="trash-can" size={24} color="white" />
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