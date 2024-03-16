import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={littleLemonHeaderStyles.container}>
      <Text
        style={littleLemonHeaderStyles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}


const littleLemonHeaderStyles = StyleSheet.create({
  container: {
    flex: 0.15, 
    backgroundColor: '#F4CE14'
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
})