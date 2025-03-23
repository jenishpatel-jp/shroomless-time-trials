import { View, Text, StyleSheet } from 'react-native'

const MapTime = ( time: string ) => {

  return (
    <View style={styles.container}> 
        <Text>{time}</Text>
    </View>

  )
}

export default MapTime

const styles = StyleSheet.create({
  container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      color: 'black',
      width: 320,
      height: 220,
      margin: 10,
      borderRadius: 10,
  }

})