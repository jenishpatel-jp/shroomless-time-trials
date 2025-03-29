import { useLocalSearchParams } from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import TimeTrialBoard from "@/components/timeTrialBoard/TimeTrialBoard";
import { useDatabase } from "@/utils/dbFunctions";
import { useSQLiteContext } from "expo-sqlite";

export default function MapDetailsScreen(){
    const { mapName } = useLocalSearchParams();

    const [mapAndTime, setMapAndTime] = useState<Record<string, string[]>>({})
    const [trigger, setTrigger] = useState(false);

    // retrieve database and database functions 
    const db = useSQLiteContext()
    const { addTime, deleteTime, getTimes } = useDatabase(db);

    // fetchches the map and times from the db
    const fetchTimes = async () => {
      try {
        const allMapAndTimes = await getTimes();
        setMapAndTime(allMapAndTimes)
      } catch (error){
        console.error("Error fetching map and times", error);
      }
    };

    // handles adding times to the db
    const handleAddTime = async (map: string, time:string) => {
      if (!time){
        console.warn("time is empty");
        return;
      }
      if (!map){
        console.warn("map is empty")
      }
      await addTime(map, time, () => setTrigger((prev) => !prev))
    }

    // handles deleting times to the db
 

    useEffect(()=> {
      fetchTimes()
    },[trigger]);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{mapName}</Text>
            <TimeTrialBoard 
              addTime={addTime} 
              deleteTime={deleteTime} 
              getTimes={getTimes} 
              mapName={mapName} 
              mapAndTime={mapAndTime}
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
    color: 'white',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
  },
});