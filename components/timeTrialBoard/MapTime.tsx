import { View, Text, StyleSheet } from 'react-native'

interface MapTimeProp {
  time: string;
}

const MapTime: React.FC<MapTimeProp> = ( { time } ) => {

  return (
    <View style={styles.container}> 
        <Text style={styles.time} >{time}</Text>
    </View>

  )
}

export default MapTime

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      color: 'black',
      width: 240,
      height: '100%',
      borderRadius: 10,
  },
  time: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }

})