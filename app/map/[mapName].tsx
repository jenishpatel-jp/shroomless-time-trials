import { useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function MapDetailsScreen(){
    const { mapName } = useLocalSearchParams();
    const [time, setTime ] = useState("");

    const handleSaveTime = () => {
        console.log(`Time for ${mapName} is ${time}`);
        setTime("");
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{mapName}</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter your time"
                value={time}
                onChangeText={setTime}
            />
            <Button title="Save Time" onPress={handleSaveTime}/>
        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
  },
});