import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput} from 'react-native';
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
  const [fullname, setFullname] = useState("Arben Ozcikrikci");
  return(
    <View>
      <Text>Hello, World</Text>
      <Text style={styles.paragraph}>Hello, {fullname}</Text>
      <TextInput
    onChangeText={setFullname}
    style={styles.paragraph}
    placeholder="hello"

    />
    </View>
    
  )
};