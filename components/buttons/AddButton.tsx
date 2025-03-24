import { Pressable, Text, StyleSheet } from "react-native"

const AddButton = () => {
    return (
        <Pressable onPress={()=>console.log('Add')} style={styles.button}>
            <Text style={styles.text} >Add</Text>
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
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
})