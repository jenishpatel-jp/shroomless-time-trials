import { StyleSheet } from 'react-native';
import { View } from '@/components/defaultComponents/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
    </View>
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


