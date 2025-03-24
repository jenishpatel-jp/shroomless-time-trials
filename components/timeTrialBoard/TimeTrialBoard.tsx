import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View, StyleSheet } from "react-native";

const TimeTrialBoard = () => {

    return (
        <View style={styles.container}>
            <MapTimeContainer />
            <MapTimeContainer />
            <AddTime />
        </View>
    )
}

export default TimeTrialBoard

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        color: 'black',
        width: '90%',
        margin: 10,
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        height: '70%',
    }
})