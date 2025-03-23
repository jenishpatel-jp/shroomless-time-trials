import { StyleSheet } from 'react-native';
import MapContainer from '@/components/mapContainer/mapContainer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { oldMaps } from '@/utils/oldMapUtils';
import { FlatList } from 'react-native';

export default function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={oldMaps}
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
    backgroundColor: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});


