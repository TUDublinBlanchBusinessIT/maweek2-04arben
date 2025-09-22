import { StyleSheet, View, Text} from 'react-native';
const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default function App(){

  return(
    <View>
      <Text>Hello, World</Text>
      <Text style={styles.paragraph}>Hello, World</Text>
    </View>
  )
};