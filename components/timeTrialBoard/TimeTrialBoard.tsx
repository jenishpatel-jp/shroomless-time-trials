import AddTime from "./AddTime";
import MapTimeContainer from "./MapTimeContainer";
import { View } from "react-native";

const TimeTrialBoard = () => {

    return (
        <View>
            <MapTimeContainer />
            <MapTimeContainer />
            <AddTime />
        </View>
    )
}

export default TimeTrialBoard