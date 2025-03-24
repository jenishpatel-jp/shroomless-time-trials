import { TextInput, View, StyleSheet } from 'react-native'
import AddButton from '../buttons/AddButton'

const AddTime = () => {

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
        height: 100,
        width: '90%',
    },
    input: {
        height: 50,
        width: 200,
        margin: 5,
        borderWidth: 1,
        fontSize: 20,
        color: 'white',
        borderColor: 'white',
        borderRadius: 10,
        flex: 1,
        textAlign: 'center',
    },
})