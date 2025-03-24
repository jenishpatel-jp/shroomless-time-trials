import { TextInput, View } from 'react-native'

const AddTime = () => {

    return (
        <View> 
            <TextInput 
                placeholder="Add Time"
                placeholderTextColor={'white'}
                onChangeText={(text) => console.log(text)}
            />
        </View>
    )
}

export default AddTime