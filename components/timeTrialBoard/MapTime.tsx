import { View, Text, StyleSheet } from 'react-native'

const MapTime = () => {

  return (
    <View style={styles.container}> 
        <Text style={styles.time} >1:21.078</Text>
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