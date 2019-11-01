import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
  return(
    <TextInput 
      style={{...styles.input, ...props.style}}
      {...props}
      
      blurOnSubmit={true}
    />  
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#a24f23",
    backgroundColor: "#faf9f5",
    fontSize: 16,
    paddingVertical: 15,
    paddingHorizontal: 10
  }
});

export default Input;