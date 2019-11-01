import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Label = props => {
  return(
    <Text 
      style={{...styles.text, ...props.style}} 
      {...props}
    >
      {props.title}  {props.optional}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#3d3d3d",
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default Label;
