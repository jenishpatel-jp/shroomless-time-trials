import { TextInput, View, StyleSheet } from 'react-native'
import AddButton from '../buttons/AddButton'

const AddTime = () => {

    return (
        <View> 
            <TextInput 
                placeholder="0:00.000"
                style={styles.container}
                placeholderTextColor={'white'}
                onChangeText={(text) => console.log(text)}
            />
            <AddButton />
        </View>
    )
}

export default AddTime

const styles = StyleSheet.create({
    container: {  
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    }

})