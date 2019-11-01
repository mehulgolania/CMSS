import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AppButton = props => {
  return(
    <TouchableWithoutFeedback style={{...styles.buttonContainer, ...props.style}} {...props}>
      <Text style={styles.button}>{props.title}</Text>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#cc5a13",
    padding: 15,
  },
  button: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1
  }
});

export default AppButton;