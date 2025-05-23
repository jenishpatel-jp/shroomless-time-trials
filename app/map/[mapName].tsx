//Expo Router import
import { useLocalSearchParams } from "expo-router";

// React Native imports
import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

// Components import 
import TimeTrialBoard from "@/components/timeTrialBoard/TimeTrialBoard";

// Database imports
import { useDatabase } from "@/utils/dbFunctions";
import { useSQLiteContext } from "expo-sqlite";
import { fetchTimes, handleAddTime, handleDeleteTime } from "@/utils/mapNameUtils";

// Legend State imports
import { state$ } from "@/app/_layout";
import { useSelector } from "@legendapp/state/react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function MapDetailsScreen(){
    const { mapName } = useLocalSearchParams();
    const map = mapName as string;

    // retrieve database and database functions 
    const db = useSQLiteContext()
    const { addTime, deleteTime, getTimes } = useDatabase(db); 

    useEffect(()=> {
      fetchTimes(getTimes)
    }, []);


    // Reactive array of times for this specific map
    const timesForMap = useSelector( () => state$.mapAndTime[map].get() ?? []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{mapName}</Text>
            <TimeTrialBoard 
              map={map} 
              mapAndTime={{ [map] : timesForMap }}
              handleAddTime={(time) => handleAddTime(map, time, addTime)}
              handleDeleteTime={(time) => handleDeleteTime(map, time, deleteTime)}
              // setTrigger={setTrigger}
              // addTime={addTime}
              // deleteTime={deleteTime}
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