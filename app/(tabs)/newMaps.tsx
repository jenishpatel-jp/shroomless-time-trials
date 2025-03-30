import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { newMaps } from '@/utils/newMapUtils';
import MapContainer from '@/components/mapContainer/mapContainer';


export default function TabTwoScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={newMaps}
          renderItem={({item}) => <MapContainer image={item.image} name={item.name} />}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    </SafeAreaProvider>
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
