import { useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import TimeTrialBoard from "@/components/timeTrialBoard/TimeTrialBoard";
import { useDatabase } from "@/utils/dbFunctions";
import { useSQLiteContext } from "expo-sqlite";
import { fetchTimes, handleAddTime, handleDeleteTime } from "@/utils/mapNameUtils";

export default function MapDetailsScreen(){
    const { mapName } = useLocalSearchParams();
    const map = mapName as string;

    const [mapAndTime, setMapAndTime] = useState<Record<string, string[]>>({})
    const [trigger, setTrigger] = useState(false);

    // retrieve database and database functions 
    const db = useSQLiteContext()
    const { addTime, deleteTime, getTimes } = useDatabase(db); 

    useEffect(()=> {
      fetchTimes(getTimes, setMapAndTime)
    }, [trigger]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{mapName}</Text>
            <TimeTrialBoard 
              map={map} 
              mapAndTime={mapAndTime}
              handleAddTime={handleAddTime}
              handleDeleteTime={handleDeleteTime}
              setTrigger={setTrigger}
              addTime={addTime}
              deleteTime={deleteTime}
              />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { 
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF1BDC',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
  },
});